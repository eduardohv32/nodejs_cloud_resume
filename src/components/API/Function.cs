using System.IO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.Threading.Tasks;
using Microsoft.Azure.Cosmos;
using System;

public static class VisitorCounterFunction
{
    private static readonly string EndpointUri = Environment.GetEnvironmentVariable("CosmosDBEndpointUri");
    private static readonly string PrimaryKey = Environment.GetEnvironmentVariable("CosmosDBPrimaryKey");
    private static readonly string DatabaseId = Environment.GetEnvironmentVariable("CosmosDBDatabaseId");
    private static readonly string ContainerId = Environment.GetEnvironmentVariable("CosmosDBContainerId");

    [FunctionName("UpdateVisitorCount")]
    public static async Task<IActionResult> Run(
        [HttpTrigger(AuthorizationLevel.Function, "post", Route = null)] HttpRequest req,
        ILogger log)
    {
        // Check for missing configuration values and log errors
        if (string.IsNullOrEmpty(EndpointUri))
        {
            log.LogError("Missing environment variable: CosmosDBEndpointUri");
            return new StatusCodeResult(StatusCodes.Status500InternalServerError);
        }

        if (string.IsNullOrEmpty(PrimaryKey))
        {
            log.LogError("Missing environment variable: CosmosDBPrimaryKey");
            return new StatusCodeResult(StatusCodes.Status500InternalServerError);
        }

        if (string.IsNullOrEmpty(DatabaseId))
        {
            log.LogError("Missing environment variable: CosmosDBDatabaseId");
            return new StatusCodeResult(StatusCodes.Status500InternalServerError);
        }

        if (string.IsNullOrEmpty(ContainerId))
        {
            log.LogError("Missing environment variable: CosmosDBContainerId");
            return new StatusCodeResult(StatusCodes.Status500InternalServerError);
        }

        log.LogInformation("Configuration values loaded successfully.");

        try
        {
            // Create a Cosmos DB client instance
            using (CosmosClient cosmosClient = new CosmosClient(EndpointUri, PrimaryKey))
            {
                log.LogInformation("Cosmos DB client initialized.");

                Container container = cosmosClient.GetContainer(DatabaseId, ContainerId);

                // Query the current count (assuming a single document with id "visitorCounter")
                log.LogInformation("Attempting to retrieve visitor counter from Cosmos DB.");
                ItemResponse<VisitorCounter> response;
                try
                {
                    response = await container.ReadItemAsync<VisitorCounter>("visitorCounter", new PartitionKey("visitorCounter"));
                }
                catch (CosmosException ex) when (ex.StatusCode == System.Net.HttpStatusCode.NotFound)
                {
                    log.LogWarning("VisitorCounter document not found. Creating a new document.");
                    var newCounter = new VisitorCounter { id = "visitorCounter", count = 0 };
                    await container.CreateItemAsync(newCounter, new PartitionKey("visitorCounter"));
                    response = await container.ReadItemAsync<VisitorCounter>("visitorCounter", new PartitionKey("visitorCounter"));
                }

                var counter = response.Resource;

                // Increment the count
                counter.count++;

                log.LogInformation($"Visitor count incremented. New count: {counter.count}");

                // Update the count in Cosmos DB
                await container.ReplaceItemAsync(counter, counter.id, new PartitionKey(counter.id));

                log.LogInformation("Visitor count updated successfully in Cosmos DB.");

                return new OkObjectResult(new { count = counter.count });
            }
        }
        catch (Exception ex)
        {
            log.LogError($"An error occurred while connecting to Cosmos DB: {ex.Message}");
            return new StatusCodeResult(StatusCodes.Status500InternalServerError);
        }
    }

    public class VisitorCounter
    {
        [JsonProperty("id")]
        public string id { get; set; }

        [JsonProperty("count")]
        public int count { get; set; }
    }
}
