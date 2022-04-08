const API_KEY = '3b4cb0b5c3c509ec710c203c7a14be66';
const BASE_URL = 'https://api.themoviedb.org/3';

export default class ApiService {
  consructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchMovies(endpoint) {
    const url = `${BASE_URL}/${endpoint}?api_key=${API_KEY}&language=en-US&query=${this.searchQuery}&page=${this.page}&include_adult=false`;
    return fetch(url)
      .then(res => res.json())
      .then(console.log);
  }

  fetchMovieBySearch() {
    this.fetchMovies('search/movie');
  }

  fetchPopularMovie() {
    this.fetchMovies('trending/all/day');
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
