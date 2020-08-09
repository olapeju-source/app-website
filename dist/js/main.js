/*var nav = document.querySelector("nav");
var menu = document.querySelector(".menu");

menu.addEventListener("click", function(e) {
  nav.classList.toggle("nav-active");
  e.preventDefault();
});*/
const navSlide = () => {
  const menu = document.querySelector(".menu");
  const nav = document.querySelector(".nav-links");
  const navActives = document.querySelectorAll(".nav-links li");

  menu.addEventListener("click", () => {
    //toggle
    nav.classList.toggle("nav-actives");

    // animation
    navActives.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
          1.5}s`;
      }
    });
    //burger animation
    menu.classList.toggle("toggle");
  });
};
navSlide();

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("map");
  var dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += "active";

  setTimeout(showSlides, 2000);
}

var arrow = document.querySelector(".arrow");
var up = document.querySelector("#up");
window.addEventListener("scroll", function() {
  if (window.scrollY > 150) {
    document.querySelector(".arrow").style.opacity = 0.9;
  } else {
    document.querySelector("arrow").style.opacity = 1;
  }
});
