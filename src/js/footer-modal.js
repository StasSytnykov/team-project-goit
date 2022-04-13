import refs from './refs';

const footerLink = document.querySelector('.footer__modal-open');
const footerBackdrop = document.querySelector('[data-action="deleted-class"]');
const modalCloseBtn = document.querySelector('.footer-modal__close-btn');

const onOpenFooterModal = event => {
  event.preventDefault();
  footerBackdrop.classList.remove('is-hidden');
  window.addEventListener('keydown', onCloseFooterModalOnEsc);
};

const onCloseFooterModal = () => {
  footerBackdrop.classList.add('is-hidden');
  window.removeEventListener('keydown', onCloseFooterModalOnEsc);
};

const onCloseModalOnBackdropClick = event => {
  if (event.currentTarget === event.target) {
    footerBackdrop.classList.add('is-hidden');
  }
};

function onCloseFooterModalOnEsc(event) {
  if (event.code === 'Escape') {
    onCloseFooterModal();
  }
}

footerBackdrop.addEventListener('click', onCloseModalOnBackdropClick);
modalCloseBtn.addEventListener('click', onCloseFooterModal);
footerLink.addEventListener('click', onOpenFooterModal);