import refs from './refs';
import ApiService from './api-service';

const api = new ApiService();

refs.searchBtn.addEventListener('submit', searchMovie);

function searchMovie(e) {
  e.preventDefault();
  api.query = e.currentTarget.elements.searchQuery.value;
  api.fetchMovieBySearch();
}
