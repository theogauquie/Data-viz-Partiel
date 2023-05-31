fetch('data.json')
    .then((response) => response.json())
    .then((data) => run_visualization(data));

function run_visualization(data) {
   sortByCountryPopulation(data);
   const selectedCountry = data.slice(data.length - 30);
   const population = selectedCountry.map((item) => item.population);
   const country = selectedCountry.map((item => item.country));
   
   const barchart = [
    {
        x: country,
        y: population,
        name: 'Data distribution of countries population',
        type: 'bar'
       }
    ];
    Plotly.newPlot('data-viz', barchart)
}



function sortByCountryPopulation(data) {
    data.sort((acc, value) => acc.population < value.population ? -1 : 1);
}


