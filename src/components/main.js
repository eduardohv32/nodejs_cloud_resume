window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})
const functionApiUrl = 'https://countresumeone.azurewebsites.net/api/UpdateVisitorCount?code=Q3ChqSipyzceOiTiimS4Z0BI867VCq4rmG4Dg9dkwZW4AzFucfGpAg%3D%3D'
const localFunctionApi = 'http://localhost:7071/api/UpdateVisitorCount';


const getVisitCount = () => {

    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
}
