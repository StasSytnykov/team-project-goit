import ApiService from './api-service';
import { Pagination } from './pagination-class';
import { fetchPopularFilms } from './popularFilms';
import makeMovieMarkup from './moviesMarkup';
// import renderMovies from './searchMovie'

  
const prevPageRef = document.querySelector(".prev");
const nextPageRef = document.querySelector(".next");
const currentPageRef = document.querySelector(".current-page");
const beforeCurrentPageRef = document.querySelector(".before-page");
const afterCurrentPageRef = document.querySelector(".after-page");
const beforeBeforeCurrentPageRef = document.querySelector(".before-page__before");
const afterAfterCurrentPageRef = document.querySelector(".after-page__after");
const firstPageRef = document.querySelector('.first');
const lastPageRef = document.querySelector('.last');
const prevDotsRef = document.querySelector('.dots-prev');
const lastDotsRef = document.querySelector('.dots-last');

beforeCurrentPageRef.hidden = true;
prevPageRef.hidden = true;
beforeBeforeCurrentPageRef.hidden = true;
firstPageRef.hidden = true;
prevDotsRef.style.display = 'none';
lastDotsRef.style.display = 'flex';

const api = new ApiService();

const moviePagination = new Pagination({
  total: 500,
  onChange(value) {
    handlePageChange(value);
    currentPageRef.textContent = value;
    beforeCurrentPageRef.textContent = value - 1;
    afterCurrentPageRef.textContent = value + 1;
    beforeBeforeCurrentPageRef.textContent = value - 2;
    afterAfterCurrentPageRef.textContent = value + 2;
    lastPageRef.textContent = this.total;
      
    if (value < 2) {
      beforeCurrentPageRef.hidden = true;
      prevPageRef.hidden = true;
      } else {
      beforeCurrentPageRef.hidden = false;
      prevPageRef.hidden = false;
    }

    if (value < 3) {
      beforeBeforeCurrentPageRef.hidden = true;
      firstPageRef.hidden = true;
    } else {
      beforeBeforeCurrentPageRef.hidden = false;
      firstPageRef.hidden = false;
    }

    if (value < 4) {
      firstPageRef.hidden = true;
    } else {
      firstPageRef.hidden = false;
    }

     if (value < 5) {
      prevDotsRef.style.display = 'none';
      } else {
      prevDotsRef.style.display = 'flex';
    }
    
    if (value > this.total - 1) {
      lastPageRef.hidden = true;
    } else {
      lastPageRef.hidden = false;
    }

    if (value > this.total - 4) {
      lastDotsRef.style.display = 'none';
      } else {
      lastDotsRef.style.display = 'flex';
    }
   
    if (value > this.total - 3) {
      afterAfterCurrentPageRef.hidden = true;
      
    } else {
      afterAfterCurrentPageRef.hidden = false;
      
    }
    if (value > this.total - 2) {
      afterCurrentPageRef.hidden = true;
      
    } else {
      afterCurrentPageRef.hidden = false;
      
    }
      
     if (value > this.total - 1) {
      nextPageRef.hidden = true;
    } else {
      nextPageRef.hidden = false;
    }},
});


nextPageRef.addEventListener('click', () => {
  moviePagination.nextPage();
});

prevPageRef.addEventListener('click', () => {
  moviePagination.prevPage();
});

beforeCurrentPageRef.addEventListener('click', () => {
  moviePagination.prevPage();
})

afterCurrentPageRef.addEventListener('click', () => {
  moviePagination.nextPage();
  })

beforeBeforeCurrentPageRef.addEventListener('click', () => {
  moviePagination.beforePrevPage();
})

afterAfterCurrentPageRef.addEventListener('click', () => {
  moviePagination.afterNextPage();
})

firstPageRef.addEventListener('click', () => {
  moviePagination.firstPage();
})

lastPageRef.addEventListener('click', () => {
  moviePagination.lastPage();
})

// function renderMovies(data) {
//   console.log(data);
//   const markup = makeMovieMarkup(data);
//   refs.galleryMovies.innerHTML = markup;
//   setTimeout(()=>{refs.spiner.style.display = 'none';},500)
  
// }
const handlePageChange = currentPage => {
  api.fetchPopularMovie(currentPage).then(data => {
   console.log(data);
  
  //  renderMovies(data.results);
});
};

api.fetchPopularMovie().then(data => {
  console.log(data);
  
  if (data.total_pages < 501)
  {moviePagination.total = data.total_pages;}
  
  // renderMovies(data.results);
});



