// -----------------------
// PANEL ANIMATION ON LOAD
// -----------------------
window.onload = () => {
  document.querySelector(".left-panel").classList.add("slide-right");
  document.querySelector(".card").classList.add("slide-left");
};

// -----------------------
// BUTTON CLICK ANIMATION
// -----------------------
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".submit-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.classList.add("clicked");
      setTimeout(() => btn.classList.remove("clicked"), 250);
    });
  });
});

// -----------------------
// TAB SWITCHING WITH SMOOTH SLIDE
// -----------------------
const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

loginTab.onclick = () => {
  loginTab.classList.add("active");
  signupTab.classList.remove("active");

  signupForm.classList.remove("slide-in-right");
  signupForm.classList.add("slide-out-right");

  loginForm.classList.remove("slide-out-left");
  loginForm.classList.add("slide-in-left");

  loginForm.classList.add("active");
  signupForm.classList.remove("active");
};

signupTab.onclick = () => {
  signupTab.classList.add("active");
  loginTab.classList.remove("active");

  loginForm.classList.remove("slide-in-left");
  loginForm.classList.add("slide-out-left");

  signupForm.classList.remove("slide-out-right");
  signupForm.classList.add("slide-in-right");

  signupForm.classList.add("active");
  loginForm.classList.remove("active");
};
