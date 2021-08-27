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