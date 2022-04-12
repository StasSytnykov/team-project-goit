import ApiService from './api-service';
import filmTpl from '../templates/movieCard.hbs';
import refs from './refs';

const NewFetchApi = new ApiService();

// let genres = [];


function fetchPopularFilms() { 
    NewFetchApi.fetchPopularMovie()
            .then(film => {
            const markup = filmTpl(film);
                
        refs.filmContainer.innerHTML = markup;    
        })

}

fetchPopularFilms();

// function genresFilm() {
//     NewFetchApi.fetchGenres().then(res => {
//         genres = res;
//         fetchPopularFilms(genres);
//     })
// }

// genresFilm();