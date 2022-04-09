import refs from './refs';
import ApiService from './api-service';
import makeMovieMarkup from './moviesMarkup';

const api = new ApiService();

refs.searchBtn.addEventListener('submit', getMovie);

function getMovie(e) {
  e.preventDefault();
  api.query = e.currentTarget.elements.searchQuery.value;
  api.fetchMovieBySearch().then(data => {
    console.log(data);
    renderMovies(data);
  });
  // .catch(err => handleError(err));
}

function renderMovies(data) {
  const markup = makeMovieMarkup(data.results);
  console.log(markup);
  refs.galleryMovies.innerHTML = markup;
}
