import refs from './refs';

const onOpenFooterModal = event => {
  event.preventDefault();
  refs.footerBackdrop.classList.remove('is-hidden');
  window.addEventListener('keydown', onCloseFooterModalOnEsc);
};

const onCloseFooterModal = () => {
  refs.footerBackdrop.classList.add('is-hidden');
  window.removeEventListener('keydown', onCloseFooterModalOnEsc);
};

const onCloseModalOnBackdropClick = event => {
  if (event.currentTarget === event.target) {
    refs.footerBackdrop.classList.add('is-hidden');
  }
};

function onCloseFooterModalOnEsc(event) {
  if (event.code === 'Escape') {
    onCloseFooterModal();
  }
}

refs.footerBackdrop.addEventListener('click', onCloseModalOnBackdropClick);
refs.modalCloseBtn.addEventListener('click', onCloseFooterModal);
refs.footerLink.addEventListener('click', onOpenFooterModal);
