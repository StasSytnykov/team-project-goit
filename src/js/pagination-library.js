import ApiService from './api-service';
import { renderMovies } from './searchMovie';
const api = new ApiService();
import Pagination from 'tui-pagination';

export const options = {
  totalItems: 500,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
};

const container = document.getElementById('tui-pagination-container');
const instance = new Pagination(container, options);

instance.on('afterMove', event => {
  const currentPage = event.page;
  localStorage.setItem('currentPage', currentPage);

  api.fetchMovies('search/movie', currentPage).then(data => {
    const totalItems = data.total_pages * 20;
    instance.setTotalItems(totalItems);
    renderMovies(data);
  });
});

export default instance;
