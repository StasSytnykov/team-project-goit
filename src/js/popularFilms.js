import ApiService from './api-service';
import filmTpl from '../templates/movieCard.hbs';
import refs from './refs';

const NewFetchApi = new ApiService();

export function fetchPopularFilms() {
  NewFetchApi.fetchPopularMovie().then(film => {
    const markup = film.results.map(filmTpl).join('');
    refs.galleryMovies.innerHTML = markup;
  });
}
fetchPopularFilms();
