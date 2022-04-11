const API_KEY = '3b4cb0b5c3c509ec710c203c7a14be66';
const BASE_URL = 'https://api.themoviedb.org/3';

export default class ApiService {
  consructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchMovies(endpoint) {
    const url = `${BASE_URL}/${endpoint}?api_key=${API_KEY}&language=en-US&query=${this.searchQuery}&page=${this.page}&include_adult=false`;
    return fetch(url).then(res => res.json());
  }

  fetchMovieBySearch() {
    return this.fetchMovies('search/movie');
  }

  fetchGenres() {
    return fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`).then(res => res.json());
  }

  fetchPopularMovie() {
    const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=free`;
    return fetch(url)
      .then(response => response.json())
      .then(results => {
        return results
      });
  }


  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
