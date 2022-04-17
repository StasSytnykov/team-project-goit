import ApiService from './api-service';
import { renderMovies } from './searchMovie';
const api = new ApiService();
const Pagination = require('tui-pagination');
// import { Pagination } from 'tui-pagination';

const options = {
  totalItems: 500,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

const container = document.getElementById('tui-pagination-container');
const instance = new Pagination(container, options);
// const first = document.querySelector('.tui-ico-first');
// const last = document.querySelector('.tui-ico-last');
// const prev = document.querySelector('.tui-ico-prev');
// const next = document.querySelector(".tui-ico-next");
// const disabled = document.querySelector('.tui-is-disabled);

// first.textContent = "1";
// last.textContent = ">>";
// prev.textContent = "<";
// next.textContent = ">"
// if (first.classList(disabled))
// disabled.textContent = "1"

// instance.on('afterMove', (event) => {

//     const currentPage = event.page;

//     api.fetchPopularMovie(currentPage).then(data => {

//         const totalItems = data.total_pages * 20;
//         last.textContent = data.total_pages;
//     instance.setTotalItems(totalItems)
//     renderMovies(data);
// })});

instance.on('afterMove', event => {
  const currentPage = event.page;

  api.fetchMovies('search/movie', currentPage).then(data => {
    const totalItems = data.total_pages * 20;
    // last.textContent = data.total_pages;
    instance.setTotalItems(totalItems);
    renderMovies(data);
  });
});
