import refs from './refs';
import { fetchPopularFilms } from './popularFilms';
import infiniteScroll from './library';
import { moviePagination } from './movie-pagination';

export function temp() {
  refs.spanHome.style.display = 'block';
  refs.spanLibrary.style.display = 'none';
  refs.searchBtn.style.display = 'block';
  refs.libraryBtnList.style.display = 'none';
  refs.backgroundContent.classList.remove('library-content');
  refs.headerBtn.forEach(el => el.classList.remove('active'));
  refs.pagidiv.style.display = 'block';
  document.removeEventListener('scroll', infiniteScroll, true);
  // localStorage.setItem('currentPage', 1);
  moviePagination.currentPage = Number(localStorage.getItem('currentPage'));
  fetchPopularFilms(localStorage.getItem('currentPage'));
}

const onClickHomeBtn = event => {
  event.preventDefault();
  localStorage.setItem('page', 'home');
  localStorage.setItem('currentPage', 1);
  // refs.spanHome.style.display = 'block';
  // refs.spanLibrary.style.display = 'none';
  // refs.searchBtn.style.display = 'block';
  // refs.libraryBtnList.style.display = 'none';
  // refs.backgroundContent.classList.remove('library-content');
  // refs.headerBtn.forEach(el => el.classList.remove('active'));
  // refs.pagidiv.style.display = 'block';
  // document.removeEventListener('scroll', infiniteScroll, true);
  // fetchPopularFilms();
  temp();
  // moviePagination.firstPage();
};

refs.homeLi.addEventListener('click', onClickHomeBtn);
refs.logo.addEventListener('click', onClickHomeBtn);
