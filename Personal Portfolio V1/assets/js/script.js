'use strict';



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * NAVBAR TOGGLE FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



/**
 * HEADER
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});



/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    }
  }
}

for (let i = 0, len = revealDelayElements.length; i < len; i++) {
  revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);


/**
 * Dark Mode 
 */

// Mengambil nilai toggle dari local storage saat load halaman
window.addEventListener('DOMContentLoaded', function() {
  var darkMode = localStorage.getItem('darkMode');
  var toggle = document.getElementById('toggle');

  if (darkMode === 'true') {
    toggle.checked = true;
  } else {
    toggle.checked = false;
  }

  // Menambahkan class dark-mode ke body jika toggle sudah diaktifkan
  if (toggle.checked) {
    enableDarkMode();
  }
});

// Mengaktifkan dark mode
function enableDarkMode() {
  var body = document.body;
  body.classList.add('dark-mode');
  localStorage.setItem('darkMode', true);
}

// Menonaktifkan dark mode
function disableDarkMode() {
  var body = document.body;
  body.classList.remove('dark-mode');
  localStorage.setItem('darkMode', false);
}

// Toggle dark mode
function toggleDarkMode() {
  var toggle = document.getElementById('toggle');

  if (toggle.checked) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
}
