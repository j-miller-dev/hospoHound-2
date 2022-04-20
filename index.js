// const navToggle = document.querySelector(".mobile-nav-toggle");
// const nav = document.querySelector(".primary-navigation");
// const closeIcon = document.querySelector(".close-icon");

// function toggleMenu() {
//   if (nav.classList.contains("show-nav")) {
//     console.log("don't display");
//     nav.classList.remove("show-nav");
//     navToggle.style.display = "block";
//     closeIcon.style.display = "none";
//   } else {
//     console.log("display");
//     nav.classList.add("show-nav");
//     navToggle.style.display = "none";
//     closeIcon.style.display = "block";
//   }
// }

// navToggle.addEventListener("click", toggleMenu);
// closeIcon.addEventListener("click", toggleMenu);

// Kevins solution

const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = nav.getAttribute("data-visible");
  if (visibility === "false") {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }

  console.log(visibility);
});

// CTA Modal Functionality
const ctaBtn = document.querySelector(".cta-btn");
const modal = document.querySelector(".contact-form-modal");
const modalExit = document.querySelector(".modal-exit");
const finalCtaBtn = document.querySelector(".final-cta-btn");

ctaBtn.addEventListener("click", openModal);
modalExit.addEventListener("click", closeModal);

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

finalCtaBtn.addEventListener("click", openModal);

// PORTFOLIO SLIDER

// Variables
const buttons = {
  prev: document.querySelector(".btn--left"),
  next: document.querySelector(".btn--right"),
};
const lines = {
  first: document.querySelector(".selection-line1"),
  second: document.querySelector(".selection-line2"),
  third: document.querySelector(".selection-line3"),
  fourth: document.querySelector(".selection-line4"),
};
let restName = document.getElementById("portfolio-title");
let restDescription = document.getElementById("rest-description");
console.log(restName);

// Setting default slide start
let slideIndex = 1;
// Selecting the selection lines
let selectionLines = document.querySelectorAll(".selection-line");
let activeLine = document.querySelector(".active-line");

console.log("you have this amount of selection lines " + selectionLines.length);

// Iterate through selection lines
function countLines() {
  let count = "";
  for (let i = 0; i < selectionLines.length; i++) {
    count = count + i;
  }
  console.log(count);
}

countLines();

// Line event listeners
lines.first.addEventListener("click", () => {
  console.log("You have clicked the first line");
  slideIndex = 1;
  showSlides(slideIndex);
  toggleLines();
  restName.textContent = "Dine in restaurant";
  restDescription.textContent =
    "just a little bit of info about this project, this focused on a clear mission, elegant menu and an integrating booking system.";
});

lines.second.addEventListener("click", () => {
  console.log("You have clicked the second line");
  slideIndex = 2;
  showSlides(slideIndex);
  toggleLines();
  restName.textContent = "Lime Cordial Cafe";
  restDescription.textContent =
    "A cool, breezy cafe residing by the ocean. Kick back with a smoothie, and a buritto. Awesome. This is just some filler text...";
});

lines.third.addEventListener("click", () => {
  console.log("You have clicked the third line");
  slideIndex = 3;
  showSlides(slideIndex);
  toggleLines();
  restName.textContent = "Another Cafe";
  restDescription.textContent =
    "This site features a full booking system. An interactive menu. It also includes google maps api and ranks super high on google thanks to us";
});

lines.fourth.addEventListener("click", () => {
  console.log("You have clicked the fourth line");
  slideIndex = 4;
  showSlides(slideIndex);
  toggleLines();
  restName.textContent = "Happy MilkBar";
  restDescription.textContent =
    "This milkbar is very happy. Why you may ask? well the site is attractive. Navigation is clear, the message is clear and contact is easy.";
});

// A function that toggles lines active/inactive
function toggleLines() {
  let allLines = document.querySelectorAll(".selection-line");
  for (i = 0; i < allLines.length; i++) {
    allLines[i].classList.remove("active-line");
  }
}

// Activates a single line
document.addEventListener("click", function clickActivate(event) {
  event.target.classList.add("active-line");
});

// Call the function first
showSlides(slideIndex);

// Listening for button clicks...
// buttons.next.addEventListener("click", () => {
//   console.log("clicked right");
//   slideIndex += 1;
//   console.log(slideIndex);
//   showSlides(slideIndex);
// });
// buttons.prev.addEventListener("click", () => {
//   console.log("clicked left");
//   slideIndex -= 1;
//   console.log(slideIndex);
//   showSlides(slideIndex);
// });

// Increase index by 1 & show the next slide
// function nextSlide() {
//   showSlides((slideIndex += 1));
// }

// Decrease the index by 1 & show the previous slides
// function previousSlide() {
//   showSlides((slideIndex -= 1));
// }

// Set the current slide
function currentSlide(n) {
  showSlides((slideIndex = n));
}

// Flip function
function showSlides(n) {
  let i;

  let slides = document.getElementsByClassName("item");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Loop through each slide in a for loop
  for (let slide of slides) {
    slide.style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
