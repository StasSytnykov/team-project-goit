import refs from './refs';

const headerContainer = document.querySelector('.container');
const backgroundContent = document.querySelector('.content');

const onClickHomeBtn = event => {
  event.preventDefault();
  refs.spanHome.style.display = 'block';
  refs.spanLibrary.style.display = 'none';
  refs.searchBtn.style.display = 'block';
  backgroundContent.classList.remove('library-content');
};

refs.homeLi.addEventListener('click', onClickHomeBtn);
