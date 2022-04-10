const closeModalBtn = document.querySelector('.modal__close-btn');
const backdrop = document.querySelector('.backdrop');

closeModalBtn.addEventListener('click', onCloseModal);
backdrop.addEventListener('click', onBackdropClick);
window.addEventListener('keydown', onEscBtnClick);

function onCloseModal() {
    window.removeEventListener('keydown', onEscBtnClick)
    backdrop.classList.add('is-hidden')
}

function onBackdropClick(event) {
    if (event.currentTarget === event.target) {
        backdrop.classList.add('is-hidden')
    }
}

function onEscBtnClick(event) {
    if (event.code === 'Escape') {
        onCloseModal(event);
    }
}