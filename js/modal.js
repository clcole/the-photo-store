
let modal = document.getElementsByClassName("gallery-modal")[0];
let imgs = document.getElementsByClassName("gallery-main__img");
let modalImg = document.getElementById("img-placeholder");

for (let i = 0; i < imgs.length; i++) {
  imgs[i].onclick = openModal;
}

function openModal() {
  modal.style.display = "block";
  modalImg.src = this.src;
}

function closeModal() {
  modal.style.display = "none";
}
