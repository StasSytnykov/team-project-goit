import refs from './refs';

const footerLink = document.querySelector('.footer__modal-open');
const footerBackdrop = document.querySelector('[data-action="deleted-class"]');
const modalCloseBtn = document.querySelector('.footer-modal__close-btn');

const onOpenFooterModal = event => {
  event.preventDefault();
  footerBackdrop.classList.remove('is-hidden');
};

const onCloseFooterModal = () => {
  backdrop.classList.add('is-hidden');
};

modalCloseBtn.addEventListener('click', onCloseFooterModal);
footerLink.addEventListener('click', onOpenFooterModal);