let displayWeather = document.getElementById('city-container');
var apiKey = "4a4acc2ad2028b514da851eb7125f0ac"

function weatherApi(cityName) {
    // Now renders units in imperial form with the units=imperial parameter
    var weatherUrlRequest = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=" + cityName + "&appid=" + apiKey;
    //`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid={4a4acc2ad2028b514da851eb7125f0ac}`

    fetch(weatherUrlRequest)
        .then(function (response) {
            response.json()
            .then(function (data) {
                console.log(data);
                var temperature = data.main.temp;
            var description = data.weather[0].description;
            let lat = data.coord.lat;
            let lon = data.coord.lon;
            // console.log(lat);
            // console.log(lon);

            //weatherInfo.forEach(list => 
            var weatherCard = document.createElement('div');
            weatherCard.innerHTML = 
            `<h3 class="text-center text-lg font-bold"> ${description}</h3 ><p>Current temperature is ${temperature}</p>`;
            // add an HTML card /w tailwind API CSS info to line 17
            
            displayWeather.append(weatherCard);
            })
            
        });
    }
    
    const searchButton = document.getElementById('search-button');
    const form = document.getElementById('search-form')
    console.log(form);
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const cityName = document.querySelector("#city-input").value;
        console.log(cityName);
        if (cityName){
            weatherApi(cityName);
        }
    });
    // Why is this here?--------------
    // weatherApi();
    
    let map;
function initMap() {
  
    // The location of Geeksforgeeks office
    const gfg_office = {
        lat: 28.50231,
        lng: 77.40548
    };
    
    // Create the map, centered at gfg_office
    const map = new google.maps.Map(
        document.getElementById("map"), {
            
            // Set the zoom of the map
            zoom: 17.56,
            center: gfg_office,
        });
}    
window.initMap = initMap;