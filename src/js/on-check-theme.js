import refs from './refs';

export const onCheckTheme = () => {
  if (refs.body.classList.contains('dark')) {
    refs.footerModal.style.backgroundColor = '#111';
  } else {
    refs.footerModal.style.backgroundColor = '#fff';
  }
};
