import refs from './refs';
import ApiService from './api-service';
import makeMovieMarkup from './moviesMarkup';

const api = new ApiService();

refs.searchBtn.addEventListener('submit', getMovie);

function getMovie(e) {
  e.preventDefault();
  refs.emptyResult.innerHTML = '';
  api.query = e.currentTarget.elements.searchQuery.value.trim();
  api
    .fetchMovieBySearch()
    .then(data => {
      if (data.results.length === 0) {
        refs.emptyResult.textContent =
          'Search result not successful. Enter the correct movie name and try again.';
      }
      renderMovies(data);
      refs.searchBtn.searchQuery.value = '';
    })
    .catch(err => handleError(err));
}

function handleError(err) {
  refs.galleryMovies.innerHTML = '';
  refs.emptyResult.innerHTML = err.message;
}

function renderMovies(data) {
  const markup = makeMovieMarkup(data.results);
  refs.galleryMovies.innerHTML = markup;
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
