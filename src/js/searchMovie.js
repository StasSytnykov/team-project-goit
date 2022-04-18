import refs from './refs';
import ApiService from './api-service';
import makeMovieMarkup from './moviesMarkup';
import instance from './pagination-library';
import { fetchPopularFilms } from './popularFilms';

const api = new ApiService();

refs.searchBtn.addEventListener('submit', getMovie);

export function getMovie(e) {
  refs.spiner.style.display = 'block';
  e.preventDefault();
  refs.emptyResult.innerHTML = '';
  refs.tui.style.display = 'flex';
  refs.pagi.style.display = 'none';
  localStorage.setItem('query', e.currentTarget.elements.searchQuery.value.trim());
  instance.reset();

  api
    .fetchMovieBySearch()
    .then(data => {
      if (data.results.length === 0) {
        fetchPopularFilms();
        refs.emptyResult.textContent =
          'Search result not successful. Enter the correct movie name and try again.';
      }
      renderMovies(data);
      const filmInfoRate = document.querySelectorAll('.film-info__rate');
      filmInfoRate.forEach(film => film.remove());
      refs.searchBtn.searchQuery.value = '';
    })
    .catch(err => handleError(err));
}

function handleError(err) {
  setTimeout(() => {
    refs.spiner.style.display = 'none';
    refs.emptyResult.innerHTML = err.message;
  }, 200);
}

export function renderMovies(data) {
  const markup = makeMovieMarkup(data.results);
  refs.galleryMovies.innerHTML = markup;
  setTimeout(() => {
    refs.spiner.style.display = 'none';
  }, 200);
}

function getGenres() {
  let genresArr = [];
  api
    .fetchGenres()
    .then(data => {
      data.genres.map(genre => genresArr.push(genre));
    })
    .catch(err => handleError(err));

  return genresArr;
}

const genresArr = getGenres();
export default genresArr;
