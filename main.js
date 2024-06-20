const apiKey = '6854aa20d0964c568bd102040242006'
const query = `http://api.weatherapi.com/v1/current.json?key=6854aa20d0964c568bd102040242006&q=Saint%20Petersburg&aqi=no`

fetch(query).then((response) => {
     return response.json()
}).then((data) => {
   console.log(data)
})


/* Получаем название города */
const form = document.querySelector('#form');
const input = document.querySelector('#inputCity');
let city;

// Слушаем отправку формы

form.onsubmit = function (e) {
   e.preventDefault();
   city = input.value.trim();
   console.log(city);
}