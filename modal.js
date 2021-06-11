
var modal = document.getElementsByClassName("gallery-modal")[0];
var imgs = document.getElementsByClassName("gallery-main__img");
var modalImg = document.getElementById("img-placeholder");

for (i = 0; i < imgs.length; i++) {
  imgs[i].onclick = openModal;
}

function openModal() {
  modal.style.display = "block";
  modalImg.src = this.src;
}

function closeModal() {
  modal.style.display = "none";
}
