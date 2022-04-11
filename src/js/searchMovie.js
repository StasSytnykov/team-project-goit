import refs from './refs';
import ApiService from './api-service';
import makeMovieMarkup from './moviesMarkup';

const api = new ApiService();

refs.searchBtn.addEventListener('submit', getMovie);

function getMovie(e) {
  e.preventDefault();
  api.query = e.currentTarget.elements.searchQuery.value;
  api
    .fetchMovieBySearch()
    .then(data => {
      console.log(data);
      renderMovies(data);
    })
    .catch(err => handleError(err));
}

function handleError(err) {
  console.log(err);
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
