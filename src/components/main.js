window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})
const functionApiUrl = 'https://visitorcountone.azurewebsites.net/api/HttpTrigger1?code=GZpkQeYz8iJwF4AVZwSCSGHYOhKZrWJduPgRqJoy19tpAzFuOCelgA%3D%3D';
const localFunctionApi = 'http://localhost:7071/api/UpdateVisitorCount';


const getVisitCount = () => {

    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API");
        count = response.count;
        document.getElementById("content").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
}
