// Foursquare API Info
const clientId = 'NQDCPJTUUGSYYJQX1OPETCQHSZO3V15HZP1S1CUCOFSTU553'
const clientSecret = '01BNRD3Y5Y0RWXUY3HZI012R3QUEVACR1T1LIIVCAIXPIKFN'
const url = 'https://api.foursquare.com/v2/venues/explore?near='

// OpenWeather Info
const openWeatherKey = '84df9d6f3f495f9b691a4151208d520c'
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?'

// Page Elements
const $input = $('#city')
const $submit = $('#button')
const $destination = $('#destination')
const $container = $('.container')
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")]
const $weatherDiv = $("#weather1")
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

// Add AJAX functions here:
const getVenues = async () => {
  const city = $input.val()
  const urlToFetch = `${url}${city}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=20200602`
     try {
    const response = await fetch(urlToFetch)
    if (response.ok) {
    const jsonResponse = await response.json()
    console.log(jsonResponse)
    const venues = jsonResponse.response.groups[0].items.map(item => item.venue)
    console.log(venues)
    return venues
     } 
    }
  catch (error) {
    console.log(error)
  }
}

const getForecast = async () => {
  const urlToFetch = `${weatherUrl}&q=${$input.val()}&APPID=${openWeatherKey}`
   console.log(urlToFetch)
 try {
  const response = await fetch(urlToFetch);
  if (response.ok) {
    const jsonResponse = await response.json();
    return jsonResponse;
  }
}
  catch (error) {
    console.log(error)
  }
}

// Render functions
const renderVenues = (venues) => {
  $venueDivs.forEach(($venue, index) => {
    const venue = venues[index];
    const venueIcon = venue.categories[0].icon;
    const venueImgSrc = `${venueIcon.prefix}bg_64${venueIcon.suffix}`;
    let venueContent = createVenueHTML(venue.name, venue.location, venueImgSrc);
    $venue.append(venueContent);
  });
  $destination.append(`<h2>${venues[0].location.city}</h2>`);
}

const renderForecast = (day) => {
  const weatherContent = createWeatherHTML(day);
  $weatherDiv.append(weatherContent);
}

const executeSearch = () => {
  $venueDivs.forEach(venue => venue.empty());
  $weatherDiv.empty();
  $destination.empty();
  $container.css("visibility", "visible");
  getVenues().then(venues => renderVenues(venues))
  
  // the error 'cannot read property 'main' of undefined only starts happening when you add the .then below. 

  /*
  getForecast()
  */

  getForecast().then(forecast => renderForecast(forecast))
  return false;
}

$submit.click(executeSearch)