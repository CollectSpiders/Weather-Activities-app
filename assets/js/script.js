let displayWeather = document.getElementById('city-container');

function weatherApi(latitude, longitude){
    var weatherUrlRequest = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid={4a4acc2ad2028b514da851eb7125f0ac}`; 
    // when "Google maps" API is implemented, be sure to add in the ${lat} & ${lon} to the API snippet above.

    fetch(weatherUrlRequest){
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data.list);
            var weatherInfo = data.list;
            // let name = ;
            // tie variable to location api when implemented.

            weatherInfo.forEach(list => {

                var weatherCard = document.createElement('div');
                weatherCard.innerHTML = `
                    <h3 class="text-lg font-bold"></h3>
                    <p>Current Weather outside is ${weather}</p>
                    <p class=""> The tempurature outside is currently ${main.temp} and feels like ${main.feels_like}</p>
                `; 
                // add an HTML card /w tailwind API CSS info to innerHTML
                
                displayWeather.append(weatherCard);
            });
        })
    }
}