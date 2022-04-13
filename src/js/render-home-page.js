import refs from './refs';
import { fetchPopularFilms } from './popularFilms';

const backgroundContent = document.querySelector('.content');
const logo = document.querySelector('.logo');

const onClickHomeBtn = event => {
  event.preventDefault();
  refs.spanHome.style.display = 'block';
  refs.spanLibrary.style.display = 'none';
  refs.searchBtn.style.display = 'block';
  // refs.libraryBtnList.classList.remove("flex");
  refs.libraryBtnList.style.display = 'none';
  backgroundContent.classList.remove('library-content');
  fetchPopularFilms();
};

refs.homeLi.addEventListener('click', onClickHomeBtn);
logo.addEventListener('click', onClickHomeBtn);
