import refs from './refs';

refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);

function onCloseModal() {
    window.removeEventListener('keydown', onEscBtnClick)
    refs.backdrop.classList.add('is-hidden')
}

function onBackdropClick(event) {
    if (event.currentTarget === event.target) {
        refs.backdrop.classList.add('is-hidden')
    }
}

export default function onEscBtnClick(event) {
    if (event.code === 'Escape') {
        onCloseModal(event);
    }
} 