import ApiService from './api-service';
import filmTpl from '../templates/movieCard.hbs';
import refs from './refs';

const NewFetchApi = new ApiService();



function fetchPopularFilms() { 
    NewFetchApi.fetchPopularMovie()
            .then(film => {
            const markup = filmTpl(film);
                
        refs.galleryMovies.innerHTML = markup;    
        })

}
fetchPopularFilms();