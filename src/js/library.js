import refs from './refs';
import makeMovieMarkup from './moviesMarkup';
import ApiService from './api-service';

refs.libraryBtn.addEventListener('click', library);
refs.libraryLi.addEventListener('click', libraryClick);

let curPage = 1;
const onPage = 10;
let limit = 0;
let data = [];

export function libMain(str) {
  data = JSON.parse(localStorage.getItem(str));
  ApiService.filmArr = data;
  limit = data ? data.length : 0;
  curPage = 1;

  if (data && data.length > 0) {
    const markup = makeMovieMarkup(data.slice(0, onPage));
    refs.galleryMovies.innerHTML = markup;
    return;
  }

  refs.galleryMovies.innerHTML = '<p class="empty-library"> There are no films added.<p>';
}

export function styling() {
  refs.spanHome.style.display = 'none';
  refs.spanLibrary.style.display = 'block';
  refs.searchBtn.style.display = 'none';
  refs.libraryBtnList.style.display = 'flex';
  refs.containerHeader.classList.add('library-content');
  refs.pagidiv.style.display = 'none';
  refs.libraryBtnList.style.display = 'flex';
  document.addEventListener('scroll', infiniteScroll, true);
}

function library(ev) {
  if (ev.target.type !== 'button') return;
  if (!ev.target.classList.contains('active')) {
    refs.headerBtn.forEach(el => {
      el.classList.remove('active');
    });
    ev.target.classList.add('active');
  }
  localStorage.setItem('page', ev.target.name);

  libMain(ev.target.name);
}

function libraryClick(ev) {
  ev.preventDefault();
  // refs.spanHome.style.display = 'none';
  // refs.spanLibrary.style.display = 'block';
  // refs.searchBtn.style.display = 'none';
  // refs.libraryBtnList.style.display = 'flex';
  // refs.containerHeader.classList.add('library-content');
  // refs.pagidiv.style.display = 'none';

  // refs.libraryBtnList.style.display = 'flex';
  // refs.watchedBtn.classList.add('active');
  // document.addEventListener('scroll', infiniteScroll, true);
  styling();
  localStorage.setItem('page', 'watched');
  refs.watchedBtn.classList.add('active');
  libMain('watched');
}

export default function infiniteScroll() {
  const height = document.body.offsetHeight;
  const screenHeight = window.innerHeight;
  const scrolled = window.scrollY;
  const limit = height - screenHeight / 4;
  const position = scrolled + screenHeight;

  if (position >= limit) {
    const mark = makeMovieMarkup(data.slice(curPage * onPage, (curPage + 1) * onPage));
    refs.galleryMovies.insertAdjacentHTML('beforeend', mark);
    curPage += 1;
  }
}
