const button = document.getElementById(`button`);
const tableDiv = document.getElementById(`table-div`);




const generateTable = (planetsInfo) =>{
    const headers = [`Planet Name`, `Population`, `Climate`, `Gravity`]
    const table = document.createElement(`table`);
    const headerRows = document.createElement(`tr`);
    for(let i = 0; i < headers.length; i++){
        const th = document.createElement(`th`);
        th.innerText = headers[i];
        headerRows.appendChild(th);
        th.style.border = "1px solid black";
        th.style.padding = "10px";
        th.style.textAlign = "center";
    }
    table.appendChild(headerRows)

    const rows = document.createElement(`tr`);
    const information = [
        planetsInfo.name,
        planetsInfo.population,
        planetsInfo.climate,
        planetsInfo.gravity
    ]
    for(let j = 0; j < information.length; j++){
        let td = document.createElement(`td`);
        td.innerText = information[j];
        rows.appendChild(td);
        td.style.border = "1px solid black";
        td.style.padding = "10px";
        td.style.textAlign = "center";
    }
    table.appendChild(rows);
    tableDiv.appendChild(table);
    table.style.border = `5px solid black`
    table.style.width = `50%`

    
}

const nextTable = (nextPlanetsInfo) =>{
    const headers = [`Planet Name`, `Population`, `Climate`, `Gravity`]
    const table = document.createElement(`table`);
    const headerRows = document.createElement(`tr`);
    for(let i = 0; i < headers.length; i++){
        const th = document.createElement(`th`);
        th.innerText = headers[i];
        headerRows.appendChild(th);
        th.style.border = "1px solid black";
        th.style.padding = "10px";
        th.style.textAlign = "center";
    }
    table.appendChild(headerRows)

    const rows = document.createElement(`tr`);
    const information = [
        nextPlanetsInfo.name,
        nextPlanetsInfo.population,
        nextPlanetsInfo.climate,
        nextPlanetsInfo.gravity
    ]
    for(let j = 0; j < information.length; j++){
        let td = document.createElement(`td`);
        td.innerText = information[j];
        rows.appendChild(td);
        td.style.border = "1px solid black";
        td.style.padding = "10px";
        td.style.textAlign = "center";
    }
    table.appendChild(rows);
    tableDiv.appendChild(table);
    table.style.border = `5px solid black`
    table.style.width = `50%`
}

const fetchingNextApi = (newApi) => {
    fetch(newApi)
    .then(function(response){
        return response.json();
    })
    .then(function(nextPlanetsData){
        nextPlanetsData.results.forEach(planet => {
            nextTable(planet);
        })
    })
    .catch(function(error){
        console.error(`Error fetching data:`, error);
    })
}

const fetchingAppi = (api) => {
    fetch(api)
    .then(function(response) {
        return response.json();  
    })
    .then(function(planetsData) {
        
        planetsData.results.forEach(planet => {
            generateTable(planet);  
        });
    })
    .catch(function(error) {
        console.error('Error fetching data:', error);  
    });
}

button.addEventListener(`click`, function(){
    const api = `https://swapi.py4e.com/api/planets/?page=1`;
    fetchingAppi(api);
    const newButton = document.createElement(`button`);
    newButton.textContent = `next`;
    tableDiv.appendChild(newButton);
    button.remove();

    newButton.addEventListener(`click`, function(){
        const newApi = `https://swapi.py4e.com/api/planets/?page=2`;
        tableDiv.innerHTML = ``;
        fetchingNextApi(newApi);
        const previousButton = document.createElement(`button`);
        previousButton.textContent = `previous`;
        tableDiv.appendChild(previousButton);

        previousButton.addEventListener(`click`, function(){
            tableDiv.innerHTML = ``
            fetchingAppi(api);
            
        })
    })
        
    })

