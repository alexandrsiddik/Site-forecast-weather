const apiKey = '6854aa20d0964c568bd102040242006'

/* Получаем название города */
const header = document.querySelector('.header');
const form = document.querySelector('#form');
const input = document.querySelector('#inputCity');


// Слушаем отправку формы

form.onsubmit = function (e) {
   e.preventDefault();

   let city = input.value.trim();


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

      if(data.error) {

      const prevCard = document.querySelector('.card');
      if(prevCard) prevCard.remove();

      const html = `<div class="card">${data.error.message}</div>`;

      header.insertAdjacentHTML("afterend", html)

   } else {

      const prevCard = document.querySelector('.card');
      if(prevCard) prevCard.remove();

      const html = `<div class="card">

        <h2 class="card-city">${data.location.name} <span>${data. location.country}</span></h2>
        
            <div class="card-weather">
             <div class="card-value">${data.current.temp_c}<sup>°c</sup></div>
       
            <img class="card-img" src="data:image/png;base64,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" alt="Weather">
        </div>
         <div class="card-desc">${data.current.condition.text}</div>
    </div>`;
    header.insertAdjacentHTML("afterend", html);

      }
})
}