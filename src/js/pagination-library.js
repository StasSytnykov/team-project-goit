import ApiService from './api-service';
import { renderMovies } from './searchMovie';
const api = new ApiService();
const Pagination = require('tui-pagination'); 



const container = document.getElementById('tui-pagination-container');
const instance = new Pagination(container, { totalItems: 500,
        itemsPerPage: 20,
        visiblePages: 5,
        centerAlign: true});
const first = document.querySelector('.tui-ico-first');
console.log(first);
// const 
first.textContent = "1";
instance.on('afterMove', (event) => {
    const currentPage = event.page;
    console.log(currentPage);
    api.fetchPopularMovie(currentPage).then(data => {
    const totalItems = data.total_pages * 20;
    instance.setTotalItems(totalItems)
    renderMovies(data); 
})});


    
// api.fetchPopularMovie(page).then(data => {
//     console.log(data);
//     const totalItems = data.total_pages*20;
//     console.log(totalItems);
//     instance.setTotalItems(totalItems)
//   console.log(renderMovies(data)); 

// });



// api.fetchPopularMovie(currentPage).then(data => {
// //     if (data.total_pages < 2000) {
// //       moviePagination.total = data.total_pages;
// //     } 
// //     renderMovies(data);