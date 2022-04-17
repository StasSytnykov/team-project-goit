import refs from './refs';

export const onCheckTheme = () => {
  if (refs.body.classList.contains('dark')) {
    refs.footerModal.style.backgroundColor = '#fff';
  } else {
    refs.footerModal.style.backgroundColor = '#111';
  }
};
