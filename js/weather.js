const API_KEY = "b930d07d7d4b1e3e66d7ff83feed16ac"

function onGeoOk(position) {
  const lat = position.coords.latitude
  const lon = position.coords.longitude
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url).
  then(Response => Response.json())
  .then(data => {
    const city = document.querySelector("#weather span:first-child")
    const weather = document.querySelector("#weather span:last-child")
     city.innerText = data.name
     weather.innerText = `${data.main.temp.toFixed(0)}°C / ${data.weather[0].main}`
  })
}
function onGeoError() {
  alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)

