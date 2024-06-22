const apiKey = '6854aa20d0964c568bd102040242006'

/* Получаем название города */
const form = document.querySelector('#form');
const input = document.querySelector('#inputCity');
let city;

// Слушаем отправку формы

form.onsubmit = function (e) {
   e.preventDefault();

   city = input.value.trim();


const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

fetch(url)
   .then((response) => {
     return response.json()
})
   .then((data) => {
      console.log(data)
      console.log(data.location.name);
      console.log(data.location.country);
      console.log(data.current.temp_c);
      console.log(data.current.condition.text);
})
}