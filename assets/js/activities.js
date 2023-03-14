// Lists of activities for various weather conditions
const clearCloudsList = `<h3>It's a good time for outdoor activities:</h3>
<ul>
    <li>Find a spot to go kayaking or paddleboarding</li>
    <li>Dust off the bike for a ride</li>
    <li>Have a picnic at a nearby park</li>
</ul>`;

const rainList = `<h3>Look into these rainy day activites:</h3>
<ul>
    <li>Rattle some pins at a bowling alley</li>
    <li>Catch a movie at a theater</li>
    <li>Take a stroll through a museum</li>
</ul>`;

const thunderstormList = `<h3>Stay safe and entertained at home with these activities:</h3>
<ul>
    <li>Have a movie streaming marathon</li>
    <li>Bust out a puzzle</li>
    <li>Bake some cookies</li>
</ul>`;

const snowList = `<h3>Have fun with these snow activities:</h3>
<ul>
    <li>Have a snowball fight</li>
    <li>Build a snow man</li>
    <li>Go sledding</li>
    <li>Cozy up with a book by the fire</li>
</ul>`;

// Disaply activities list matching the current weather of the searched city; uses weather icon code as reference point
function showActivities() {
  // Retrieve current weather icon code
  var iconCode = localStorage.getItem("icon-code");
  console.log(iconCode);

  // Arrays of icon codes for possible weather conditions
  let clearClouds = ["01d", "01n", "02d", "02n", "03d", "03n", "04d", "04n"];
  let rain = ["09d", "09n", "10d", "10n"];
  let thunderstorm = ["11d", "11n", "50d", "50n"];
  let snow = ["13d", "13n"];

  // Check each index of each array against current weather icon code until a match & display respective activities list in HTML <div id="activities">
  if (clearClouds.indexOf(iconCode) !== -1) {
    activitiesDiv.innerHTML = clearCloudsList;
  } else if (rain.indexOf(iconCode) !== -1) {
    activitiesDiv.innerHTML = rainList;
  } else if (thunderstorm.indexOf(iconCode) !== -1) {
    activitiesDiv.innerHTML = thunderstormList;
  } else {
    activitiesDiv.innerHTML = snowList;
  };
}