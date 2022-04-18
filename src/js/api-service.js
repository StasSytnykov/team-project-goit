const API_KEY = '3b4cb0b5c3c509ec710c203c7a14be66';
const BASE_URL = 'https://api.themoviedb.org/3';

export default class ApiService {
  consructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  static filmArr = [];

  fetchMovies(endpoint, page) {
    this.query = localStorage.getItem('query') ? localStorage.getItem('query') : '';
    const url = `${BASE_URL}/${endpoint}?api_key=${API_KEY}&language=en-US&query=${this.searchQuery}&page=${page}&include_adult=false`;
    return fetch(url).then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(new Error('Oops! Search bar is empty.'));
    });
  }

  async fetchMovieBySearch(page = 1) {
    // return this.fetchMovies('search/movie', page);
    const resp = await this.fetchMovies('search/movie', page);
    ApiService.filmArr = resp.results;
    console.log(ApiService.filmArr);
    return resp;
  }

  fetchGenres() {
    return fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`).then(res => res.json());
  }

  async fetchPopularMovie(page = 1) {
    const url = `${BASE_URL}/trending/all/day?api_key=${API_KEY}&page=${page}`;
    const resp = await fetch(url)
      .then(response => response.json())
      .then(results => {
        ApiService.filmArr = results.results;
        return results;
      });
    return resp;
  }

  fetchInfoOfFilm(movie_id) {
    // const url = `${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US`;
    // return fetch(url)
    //   .then(response => response.json())
    //   .then(results => {
    //     return results;
    //   });
    const res = ApiService.filmArr.filter(el => el.id.toString() === movie_id);
    return res[0];
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
