let displayWeather = document.getElementById('city-container');

function weatherApi(longitude, latitude) {
    var weatherUrlRequest = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid={4a4acc2ad2028b514da851eb7125f0ac}`;
    // when "Google maps" API is implemented, be sure to add in the ${lat} & ${lon} to the API snippet above.

    fetch(weatherUrlRequest)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data.list);
            var weatherInfo = data.list;

            weatherInfo.forEach(list => {
                var weatherCard = document.createElement('div');
                weatherCard.innerHTML = ``;
                // add an HTML card /w tailwind API CSS info to line 17

                displayWeather.append(weatherCard);
            });
        })
}

const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', function (event) {
    event.preventDefault();
    const cityName = document.querySelector('input[type="text"]').value;
    weatherApi(cityName);
});