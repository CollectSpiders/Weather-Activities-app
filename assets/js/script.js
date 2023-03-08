let displayWeather = document.getElementById('city-container');

function weatherApi(cityName) {
    var apiKey = "4a4acc2ad2028b514da851eb7125f0ac"
    var weatherUrlRequest = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;
    //`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid={4a4acc2ad2028b514da851eb7125f0ac}`

    fetch(weatherUrlRequest)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data.list);
            var temperature = data.main.temp;
            var description = data.weather[0].description;

            //weatherInfo.forEach(list => 
            var weatherCard = document.createElement('div');
            weatherCard.innerHTML = `
            <h3 class="text-lg font-bold> ${description}</h3 >
            <p>Current temperature is ${temperature}</p>
            `;
            // add an HTML card /w tailwind API CSS info to line 17

            displayWeather.append(weatherCard);
        });
}

const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', function (event) {
    event.preventDefault();
    const cityName = document.querySelector("#search-button").value;
    if (cityName)
        weatherApi(cityName);
});