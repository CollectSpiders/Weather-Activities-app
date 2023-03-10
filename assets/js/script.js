let displayWeather = document.getElementById('city-container');

function weatherApi(cityName) {
    var apiKey = "4a4acc2ad2028b514da851eb7125f0ac"
    var weatherUrlRequest = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=" + cityName + "&appid=" + apiKey;
    //`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid={4a4acc2ad2028b514da851eb7125f0ac}`

    fetch(weatherUrlRequest)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            
            var temperature = data.main.temp;
            var description = data.weather[0].description;

            let latitude = data.coord.lat;
            let longitude = data.coord.lon;
            console.log(latitude)
            localStorage.setItem("lat", latitude);
            localStorage.setItem("lon", longitude);

            var iconCode = data.weather[0].icon;
            var iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;


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
        });
}

const searchButton = document.getElementById('search-button');
const form = document.getElementById('search-form')
form.addEventListener('submit', function (event) {
    event.preventDefault();
    //testcode
var lat = localStorage.getItem("lat");
var lon = localStorage.getItem("lon");
var latlon = lat+","+lon;

console.log(latlon);

var map = document.getElementById("map");

var srcValue = map.getAttribute("src");

var newSrcValue = srcValue.replace("-33.8569,151.2152", latlon);


map.setAttribute("src", newSrcValue);
//.....
    const cityName = document.querySelector("#city-input").value;
    console.log(cityName);
    if (cityName) {
        weatherApi(cityName);

}});

weatherApi('Seattle');

