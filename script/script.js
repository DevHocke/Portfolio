//Hämta hem knappen för scrollning:
mybutton = document.getElementById("myBtn");

// När besökaren scrollat ner 20 pixlar så visas knappen för att scrolla till toppen av sidan.
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// När besökaren klickar på knappen så scrollar sidan upp till toppen.
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function weatherApp( cityID ) {
  let key = '0d9ea726f6664ca8166acb9c4cf0dbcf';
  fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
    drawWeather(data);
  })
  .catch(function() {
    // catch any errors
  });
}

window.onload = function() {
  weatherApp( 2700199 );
}

function drawWeather( d ) {
var celcius = Math.round(parseFloat(d.main.temp)-273.15);
var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 

document.getElementById('description').innerHTML = d.weather[0].description;
document.getElementById('temp').innerHTML = celcius + '&deg;';
document.getElementById('location').innerHTML = d.name;
}