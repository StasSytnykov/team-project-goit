import ApiService from './api-service';
import makeMovieMarkup from './moviesMarkup';
import refs from './refs';

const NewFetchApi = new ApiService();

export function fetchPopularFilms() {
  refs.emptyResult.innerHTML = '';
  refs.tui.style.display = 'none';
  refs.pagi.style.display = 'flex';
  NewFetchApi.fetchPopularMovie(localStorage.getItem('currentPage')).then(film => {
    const markup = makeMovieMarkup(film.results);
    refs.galleryMovies.innerHTML = markup;
  });
}
