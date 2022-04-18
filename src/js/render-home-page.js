import refs from './refs';
import { fetchPopularFilms } from './popularFilms';
import infiniteScroll from './library';
import { moviePagination } from './movie-pagination';

const onClickHomeBtn = event => {
  event.preventDefault();
  refs.spanHome.style.display = 'block';
  refs.spanLibrary.style.display = 'none';
  refs.searchBtn.style.display = 'block';
  refs.libraryBtnList.style.display = 'none';
  refs.backgroundContent.classList.remove('library-content');
  refs.headerBtn.forEach(el => el.classList.remove('active'));
  refs.pagidiv.style.display = 'block';
  document.removeEventListener('scroll', infiniteScroll, true);
  fetchPopularFilms();
  moviePagination.firstPage();
};

refs.homeLi.addEventListener('click', onClickHomeBtn);
refs.logo.addEventListener('click', onClickHomeBtn);
