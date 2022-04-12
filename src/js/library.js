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
getData(10, 'watched');
getData(12, 'queue');

refs.libraryBtn.addEventListener('click', library);
refs.libraryLi.addEventListener('click', libraryClick);

function library(ev) {
  if (ev.target.type !== 'button') return;
  const data = JSON.parse(localStorage.getItem(ev.target.name));
  const markup = data.map(template).join('\n');
  if (!ev.target.classList.contains('active')) {
    refs.headerBtn.forEach(el => {
      el.classList.remove('active');
    });
    ev.target.classList.add('active');
  }
  if (localStorage.getItem(ev.target.name)) {
    refs.galleryMovies.innerHTML = markup;
    return;
  }
  refs.galleryMovies.innerHTML = `There are NO films choised by you in ${ev.target.name} section`;
}

function libraryClick(ev) {
  ev.preventDefault();
  refs.spanHome.style.display = 'none';
  refs.spanLibrary.style.display = 'block';
  refs.searchBtn.style.display = 'none';
  refs.libraryBtnList.classList.add('flex');//
  refs.containerHeader.classList.add('library-content');

  refs.watchedBtn.classList.add('active');
  console.log(refs.watchedBtn);
  if (localStorage.getItem('watched')) {
    const data = JSON.parse(localStorage.getItem('watched'));
    const markup = data.map(template).join('\n');
    refs.galleryMovies.innerHTML = markup;
    return;
  }
  refs.galleryMovies.innerHTML = `There are NO films choised by you in watched section`;
}
