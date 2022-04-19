import ApiService from './api-service';
import { Pagination } from './pagination-class';
import refs from './refs';
import { renderMovies } from './searchMovie';

refs.beforeCurrentPageRef.hidden = true;
refs.prevPageRef.hidden = true;
refs.beforeBeforeCurrentPageRef.hidden = true;
refs.firstPageRef.hidden = true;
refs.prevDotsRef.style.display = 'none';
refs.lastDotsRef.style.display = 'flex';

 if (refs.mediaQuery.matches) {
      refs.firstPageRef.hidden = true;
 }

if (refs.mediaQuery.matches) {
      refs.lastPageRef.hidden = true;
}
if (refs.mediaQuery.matches) {
  refs.lastDotsRef.style.display = 'none';
}
if (refs.mediaQuery.matches) {
  refs.prevDotsRef.style.display = 'none';
}

const api = new ApiService();

export const moviePagination = new Pagination({
  total: 1000,
  onChange(value) {
    handlePageChange(value);
    refs.currentPageRef.textContent = value;
    refs.beforeCurrentPageRef.textContent = value - 1;
    refs.afterCurrentPageRef.textContent = value + 1;
    refs.beforeBeforeCurrentPageRef.textContent = value - 2;
    refs.afterAfterCurrentPageRef.textContent = value + 2;
    refs.lastPageRef.textContent = this.total;

    if (value < 2) {
      refs.beforeCurrentPageRef.hidden = true;
      refs.prevPageRef.hidden = true;
    } else {
      refs.beforeCurrentPageRef.hidden = false;
      refs.prevPageRef.hidden = false;
    }

    if (value < 3) {
      refs.beforeBeforeCurrentPageRef.hidden = true;
      refs.firstPageRef.hidden = true;
    } else {
      refs.beforeBeforeCurrentPageRef.hidden = false;
      refs.firstPageRef.hidden = false;
    }

    if (value < 4 || refs.mediaQuery.matches) {
      refs.firstPageRef.hidden = true;
    } else {
      refs.firstPageRef.hidden = false;
    }

    if (value < 5 || refs.mediaQuery.matches) {
      refs.prevDotsRef.style.display = 'none';
    } else {
      refs.prevDotsRef.style.display = 'flex';
    }

    if (value > this.total - 1 || refs.mediaQuery.matches) {
      refs.lastPageRef.hidden = true;
    } else {
      refs.lastPageRef.hidden = false;
    }

    if (value > this.total - 4 || refs.mediaQuery.matches) {
      refs.lastDotsRef.style.display = 'none';
    } else {
      refs.lastDotsRef.style.display = 'flex';
    }

    if (value > this.total - 3) {
      refs.afterAfterCurrentPageRef.hidden = true;
    } else {
      refs.afterAfterCurrentPageRef.hidden = false;
    }
    if (value > this.total - 2) {
      refs.afterCurrentPageRef.hidden = true;
    } else {
      refs.afterCurrentPageRef.hidden = false;
    }

    if (value > this.total - 1) {
      refs.nextPageRef.hidden = true;
    } else {
      refs.nextPageRef.hidden = false;
    }
  },
});

refs.nextPageRef.addEventListener('click', () => {
  moviePagination.nextPage();
});

refs.prevPageRef.addEventListener('click', () => {
  moviePagination.prevPage();
});

refs.beforeCurrentPageRef.addEventListener('click', () => {
  moviePagination.prevPage();
});

refs.afterCurrentPageRef.addEventListener('click', () => {
  moviePagination.nextPage();
});

refs.beforeBeforeCurrentPageRef.addEventListener('click', () => {
  moviePagination.beforePrevPage();
});

refs.afterAfterCurrentPageRef.addEventListener('click', () => {
  moviePagination.afterNextPage();
});

refs.firstPageRef.addEventListener('click', () => {
  moviePagination.firstPage();
});

refs.lastPageRef.addEventListener('click', () => {
  moviePagination.lastPage();
});

const handlePageChange = currentPage => {
  api.fetchPopularMovie(currentPage).then(data => {
    if (data.total_pages < 2000) {
      moviePagination.total = data.total_pages;
    }
    renderMovies(data);
  });
};

api.fetchPopularMovie().then(data => {
  renderMovies(data);
});