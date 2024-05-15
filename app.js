
const openModal = document.querySelector(".btn");
const modal = document.querySelector(".modal-overlay");
const closeModal = document.querySelector(".close-btn");

openModal.addEventListener("click", function () {
  modal.classList.toggle("open-modal");
});
closeModal.addEventListener("click", function (){
  modal.classList.toggle("open-modal");
});