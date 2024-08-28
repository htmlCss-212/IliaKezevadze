const slides = document.querySelectorAll(".slide");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 7000);
  }
}

function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });
  slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
  clearInterval(intervalId);
  slideIndex--;
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function showSideBar() {
  const sideBar = document.querySelector(".sideBar");
  sideBar.style.display = "flex";
}
function hideSidebar() {
  const sideBar = document.querySelector(".sideBar");
  sideBar.style.display = "none";
}
function Showlogin() {
  const login = document.querySelector(".login");
  login.style.display = "block";
}
function hideLogin() {
  const login = document.querySelector(".login");
  login.style.display = "none";
}

const form = document.querySelector(".login");
const resinput = document.getElementById("res");
const emailinput = document.getElementById("email");
const passwordinput = document.getElementById("password");
const emailresinput = document.getElementById("emailres");
document.addEventListener("DOMContentLoaded", passwordValidator);
function passwordValidator() {
  const password = passwordinput.value;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (passwordRegex.test(password)) {
    document.getElementById("res").textContent = "Welcome";
    return true;
  } else {
    document.getElementById("res").textContent =
      "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
    return false;
  }
}
function emailValidator() {
  const email = emailinput.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(email)) {
    document.getElementById("emailres").textContent = "Valid email";
    return true;
  } else {
    document.getElementById("emailres").textContent = "Invalid email format.";
    return false;
  }
}

const revtxt = document.getElementById("revtxt");

const subbutton = document.getElementById("leaveB");
function thanks() {
  document.getElementById("leaveH").textContent =
    "Thank you for your feedback!";
}
const gotopbtn = document.querySelector("#totop");
window.addEventListener("scroll", checkHeight);
function checkHeight() {
  if (window.scrollY > 550) {
    gotopbtn.style.display = "flex";
  } else {
    gotopbtn.style.display = "none";
  }
}

gotopbtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
