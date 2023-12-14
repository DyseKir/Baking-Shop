const modal = document.querySelector('.backdrop');
const modalBtn0pen = document.querySelector('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');

const toggleModal = () => modal.classList.toggle('is-hidden');

modalBtn0pen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);