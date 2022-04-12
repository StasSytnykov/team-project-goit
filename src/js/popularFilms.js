import ApiService from './api-service';
import filmTpl from '../templates/movieCard.hbs';
import refs from './refs';

const NewFetchApi = new ApiService();

// let genres = [];
// function genresFilm() {
//     NewFetchApi.fetchGenres().then(res => {
//         genres = res;
//         fetchPopularFilms(genres);
//     })
// }

// genresFilm();

export function fetchPopularFilms() {
  NewFetchApi.fetchPopularMovie().then(film => {
    const markup = film.results.map(filmTpl).join('');
    refs.galleryMovies.innerHTML = markup;
  });
}
fetchPopularFilms();

