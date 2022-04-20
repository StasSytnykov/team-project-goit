import refs from './refs';
import { getMovieTemp } from './searchMovie';
import { libMain } from './library';
import { styling } from './library';
import { temp } from './render-home-page';
import { fetchPopularFilms } from './popularFilms';

document.addEventListener('DOMContentLoaded', onLoad);

function onLoad() {
  const key = localStorage.getItem('page');

  if (!key) {
    fetchPopularFilms();
  } else if (key === 'home') {
    temp();
  } else if (key === 'search') {
    getMovieTemp();
  } else if (key === 'watched' || 'queue') {
    styling();
    libMain(key);
    [...refs.headerBtn].find(el => el.name === key).classList.add('active');
  }
}
