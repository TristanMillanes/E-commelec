window.onload = () => {
  document.querySelector(".left-panel").classList.add("slide-right");
  document.querySelector(".card").classList.add("slide-left");
};

// Button click animation
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
// TAB SWITCHING
// -----------------------
const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

loginTab.onclick = () => {
  loginTab.classList.add("active");
  signupTab.classList.remove("active");
  loginForm.classList.add("active");
  signupForm.classList.remove("active");
};

signupTab.onclick = () => {
  signupTab.classList.add("active");
  loginTab.classList.remove("active");
  signupForm.classList.add("active");
  loginForm.classList.remove("active");
};
