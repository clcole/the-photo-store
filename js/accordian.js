
let servicesButton = document.getElementsByClassName("services-section__button");

for (let i = 0; i < servicesButton.length; i++) {
  servicesButton[i].addEventListener("click", toggleActive);
}

function toggleActive() {
  this.classList.toggle("services-section__button_active");

  let servicesArticle = this.nextElementSibling;

  if (servicesArticle.style.maxHeight) {
    servicesArticle.style.maxHeight = null;
  } 
  else {
    servicesArticle.style.maxHeight = servicesArticle.scrollHeight + "px";
  } 
}