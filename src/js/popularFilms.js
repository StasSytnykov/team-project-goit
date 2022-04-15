import ApiService from './api-service';
import makeMovieMarkup from './moviesMarkup';
import refs from './refs';

const NewFetchApi = new ApiService();

export function fetchPopularFilms() {
  refs.emptyResult.innerHTML = '';
  NewFetchApi.fetchPopularMovie().then(film => {
    const markup = makeMovieMarkup(film.results);
    refs.galleryMovies.innerHTML = markup;
  });
}
fetchPopularFilms();
