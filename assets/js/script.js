let displayWeather = document.getElementById('city-container');
// Element to display activities list
let activitiesDiv = document.getElementById('activities');

function weatherApi(cityName) {
    var apiKey = "4a4acc2ad2028b514da851eb7125f0ac"
    var weatherUrlRequest = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=" + cityName + "&appid=" + apiKey;
    //`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid={4a4acc2ad2028b514da851eb7125f0ac}`

    fetch(weatherUrlRequest)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var temperature = `${Math.round(data.main.temp)} \u00B0F`;
            var description = data.weather[0].description.toUpperCase();

            let latitude = data.coord.lat;
            let longitude = data.coord.lon;
            console.log(latitude)
            localStorage.setItem("lat", latitude);
            localStorage.setItem("lon", longitude);

            var iconCode = data.weather[0].icon;
            var iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
            localStorage.setItem("icon-code", iconCode);

            //weatherInfo.forEach(list => 
            var weatherCard = document.createElement('div');
            displayWeather.innerHTML = '';
            weatherCard.innerHTML = `
            <div class="flex justify-between items-center">
            <h3 class="text-lg font-bold">${description}</h3>
            <img src="${iconUrl}" alt="${description}">
        </div>
            <p class="text-lg font-bold"> ${temperature}</p>
            `;
            // add an HTML card /w tailwind API CSS info to line 17

            displayWeather.append(weatherCard);
            var myLat = localStorage.getItem("lat");
            var myLon = localStorage.getItem("lon");
            var myLatLon = myLat + "," + myLon;
            // console.log(myLatLon);
            var map = document.getElementById("map");
            map.src = "https://www.google.com/maps/embed/v1/view?key=AIzaSyDINBNfJky5chXW3us-42CNV9_4tRgMIdE&zoom=10&center=" + myLatLon;
            console.log(map.src);
            
            // Display activities based upon current weather conditions
            showActivities();

        });
}


const searchButton = document.getElementById('search-button');
const form = document.getElementById('search-form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Clear activities div before repopulating
    activitiesDiv.innerHTML = "";
    //testcode
    const cityName = document.querySelector("#city-input").value;
    console.log(cityName);
    if (cityName){
        weatherApi(cityName);
    }  
});

weatherApi();

