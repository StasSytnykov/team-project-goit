const API_KEY = '3b4cb0b5c3c509ec710c203c7a14be66';
const BASE_URL = 'https://api.themoviedb.org/3';

export default class ApiService {
  consructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchMovies(endpoint, page) {
    const url = `${BASE_URL}/${endpoint}?api_key=${API_KEY}&language=en-US&query=${this.searchQuery}&page=${page}&include_adult=false`;
    return fetch(url).then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(new Error('Oops! Search bar is empty.'));
    });
  }

  fetchMovieBySearch(page) {
    return this.fetchMovies('search/movie', page);
  }

  fetchGenres() {
    return fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`).then(res => res.json());
  }

  fetchPopularMovie(page) {
    const url = `${BASE_URL}/trending/all/day?api_key=${API_KEY}&page=${page}`;
    return fetch(url)
      .then(response => response.json())
      .then(results => {
        return results;
      });
  }

  fetchInfoOfFilm(movie_id) {
    const url = `${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US`;
    return fetch(url)
      .then(response => response.json())
      .then(results => {
        return results;
      });
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
