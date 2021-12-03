const hamburger = document.getElementsByClassName("hamburger")[0];
const navUL = document.getElementsByClassName("navUL")[0];
const rightPart = document.getElementsByClassName("Rpart")[0];
const navcontainer = document.getElementsByClassName("navbar-container")[0];

hamburger.addEventListener("click", () => {
  navUL.classList.toggle("active");
});

hamburger.addEventListener("click", () => {
  rightPart.classList.toggle("active");
});

hamburger.addEventListener("click", () => {
  navcontainer.classList.toggle("active");
});
