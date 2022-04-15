import refs from './refs';
import ApiService from './api-service';
import makeMovieMarkup from './moviesMarkup';

const api = new ApiService();

refs.searchBtn.addEventListener('submit', getMovie);

function getMovie(e) {
  refs.spiner.style.display = 'block';
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
      const filmInfoRate = document.querySelectorAll('.film-info__rate');
      filmInfoRate.forEach(film => film.remove());
      refs.searchBtn.searchQuery.value = '';
     
    })
    .catch(err => handleError(err));
}

function handleError(err) {
  refs.galleryMovies.innerHTML = '';
  refs.emptyResult.innerHTML = err.message;
}

function renderMovies(data) {
  console.log(data.results);
  const markup = makeMovieMarkup(data.results);
  refs.galleryMovies.innerHTML = markup;
  setTimeout(()=>{refs.spiner.style.display = 'none';},500)
  
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
