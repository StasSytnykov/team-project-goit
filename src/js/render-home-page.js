import refs from './refs';
import { fetchPopularFilms } from './popularFilms';

const onClickHomeBtn = event => {
  event.preventDefault();
  refs.spanHome.style.display = 'block';
  refs.spanLibrary.style.display = 'none';
  refs.searchBtn.style.display = 'block';
  refs.libraryBtnList.style.display = 'none';
  refs.backgroundContent.classList.remove('library-content');
  fetchPopularFilms();
};

refs.homeLi.addEventListener('click', onClickHomeBtn);
refs.logo.addEventListener('click', onClickHomeBtn);
