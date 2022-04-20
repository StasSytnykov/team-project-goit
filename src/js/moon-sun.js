import refs from './refs';

const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme');
  } else {
    localStorage.setItem('theme', 'dark');
  }

  addDarkTheme();
});

function addDarkTheme() {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark');
      chk.checked = true;
      refs.modal.classList.add('dark');
      refs.modalInfo.classList.add('dark');
      refs.pagi.classList.add('moon');
      refs.footerModal.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
      refs.modal.classList.remove('dark');
      refs.footerModal.classList.remove('dark');
      refs.pagi.classList.remove('moon');
      chk.checked = false;
      refs.modalInfo.classList.remove('dark');
    }
  } catch (err) {}
}

addDarkTheme();
