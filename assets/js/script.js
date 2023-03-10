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
            console.log(data);
            var temperature = data.main.temp;
            var description = data.weather[0].description;
            let lat = data.coord.lat;
            let long = data.coord.long;
            //weatherInfo.forEach(list => 
            var weatherCard = document.createElement('div');
            weatherCard.innerHTML = `
            <h3 class="text-lg font-bold"> ${description}</h3 >
            <p>Current temperature is ${temperature}</p>
            `;
            // add an HTML card /w tailwind API CSS info to line 17

            displayWeather.append(weatherCard);
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

        var pin = document.getElementById("map");
var latlong = "45.5152, 122.678"

var srcValue = iframe.getAttribute("src");

// Replace part of the text with a new value
var newSrcValue = srcValue.replace("-33.8569,151.2152", latlong);

// Update the src attribute with the new value
iframe.setAttribute("src", newSrcValue);
    }
});

weatherApi('Ḩeşār-e Sefīd');

