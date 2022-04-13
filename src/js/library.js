import refs from './refs';
import makeMovieMarkup from './moviesMarkup';
import template from '../templates/movieCard.hbs';

async function getData(page, key) {
  const data = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=c650d1c0c307d1ff6855b3a117a6cfa1&page=${page}`,
  )
    .then(responce => responce.json())
    .then(data => {
      localStorage.setItem(key, JSON.stringify(data.results));
    });
}
// getData(10, 'watched');
getData(12, 'queue');

refs.libraryBtn.addEventListener('click', library);
refs.libraryLi.addEventListener('click', libraryClick);

function library(ev) {
  if (ev.target.type !== 'button') return;
  const data = JSON.parse(localStorage.getItem(ev.target.name));

  if (!ev.target.classList.contains('active')) {
    refs.headerBtn.forEach(el => {
      el.classList.remove('active');
    });
    ev.target.classList.add('active');
  }
  if (data) {
    const markup = makeMovieMarkup(data);
    refs.galleryMovies.innerHTML = markup;
    return;
  }
  refs.galleryMovies.innerHTML = '<p class="empty-library"> There are no films added.<p>';
}

function libraryClick(ev) {
  ev.preventDefault();
  refs.spanHome.style.display = 'none';
  refs.spanLibrary.style.display = 'block';
  refs.searchBtn.style.display = 'none';
  refs.libraryBtnList.style.display = 'flex';
  refs.containerHeader.classList.add('library-content');

  refs.libraryBtnList.style.display = 'flex';
  refs.watchedBtn.classList.add('active');
  console.log(refs.watchedBtn);
  if (localStorage.getItem('watched')) {
    const data = JSON.parse(localStorage.getItem('watched'));
    const markup = makeMovieMarkup(data);
    refs.galleryMovies.innerHTML = markup;
    return;
  }
  refs.galleryMovies.innerHTML = '<p class="empty-library"> There are no films added.<p>';
}
