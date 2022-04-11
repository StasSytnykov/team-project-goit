import ApiService from './api-service';
import filmTpl from '../templates/movieCard.hbs';
import refs from './refs';

const NewFetchApi = new ApiService();



function fetchPopularFilms() { 
    NewFetchApi.fetchPopularMovie()
            .then(film => {
            console.log(film);
            const markup = filmTpl(film);
                console.log(markup);
                refs.galleryMovies.innerHTML = markup;    
        })

}
fetchPopularFilms();