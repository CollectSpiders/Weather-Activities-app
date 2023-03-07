let displayWeather = document.getElementById('');

function weatherApi(longitude, latitude){
    var weatherUrlRequest = `https://api.openweathermap.org/data/2.5/weather?lat=${coord.lat}&lon=${coord.lon}&appid={4a4acc2ad2028b514da851eb7125f0ac}`; 
    // when "Google maps" API is implemented, be sure to add in the ${lat} & ${lon} to the API snippet above.

    fetch(weatherUrlRequest){
        .then(function(response){
            return response.json();
        })
        .then(function(data){
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
}