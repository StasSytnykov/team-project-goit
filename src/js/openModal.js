import refs from './refs';
import ApiService from './api-service';
import genresArr from './searchMovie';
import emptyImg from './images/img_not_found.jpg';
import LocalStorageService from "../js/local-storage";
// function onOpenCard(e) {
//     if(e.curren)
// }
const newFetchMovieById = new ApiService();
const localStorageService = new LocalStorageService();

refs.galleryMovies.addEventListener('click', onOpenModal);

async function onOpenModal(e) {
  let idOfCard = e.target.parentElement.parentElement.id;
  const fetchResponse = await newFetchMovieById.fetchInfoOfFilm(idOfCard).then(filmInfo => {
      renderMarkupOfModal(filmInfo);
      
    //   Добавил функции добавления фильма в local storage
      
            const watchBtn = document.querySelector(".modal_button-watch");
            const watchBtnDelete = document.querySelector(".btn_watch-del");
            const queueBtn = document.querySelector(".modal_button-queue");
            const queueBtnDelete = document.querySelector(".btn_queue-del");

            const watchedLibrary = localStorageService.checkMovie(filmInfo, "watched");
            const queueLibrary = localStorageService.checkMovie(filmInfo, "queue");

            if (watchedLibrary) {
                watchBtn.classList.add('visually-hidden');
                watchBtnDelete.classList.remove('visually-hidden');
            }

            if (queueLibrary) {
                queueBtn.classList.add('visually-hidden');
                queueBtnDelete.classList.remove('visually-hidden');
            }

            watchBtn.addEventListener("click", function addMovieInStorage(event) {

                if (queueLibrary) {
                    localStorageService.deleteMovie(filmInfo, 'queue');

                    queueBtn.classList.remove('visually-hidden');
                    queueBtnDelete.classList.add('visually-hidden');
                }

                const movieKey = event.target.dataset.key;
                localStorageService.addMovie(filmInfo, movieKey);

                watchBtn.classList.add('visually-hidden');
                watchBtnDelete.classList.remove('visually-hidden');
            });

            watchBtnDelete.addEventListener("click", function deleteMovieFromStorage(event) {

                const movieKey = event.target.dataset.key;
                localStorageService.deleteMovie(filmInfo, movieKey);

                watchBtn.classList.remove('visually-hidden');
                watchBtnDelete.classList.add('visually-hidden');

            });
            
            queueBtn.addEventListener("click", function onQueueBtnClick(event) {

                if (watchedLibrary) {
                    localStorageService.deleteMovie(filmInfo, 'watched');

                    watchBtn.classList.remove('visually-hidden');
                    watchBtnDelete.classList.add('visually-hidden');
                }
                    
                const movieKey = event.target.dataset.key;
                localStorageService.addMovie(filmInfo, movieKey);

                queueBtn.classList.add('visually-hidden');
                queueBtnDelete.classList.remove('visually-hidden');

            });

            queueBtnDelete.addEventListener("click", function deleteQueueFromStorage(event) {

                const movieKey = event.target.dataset.key;
                localStorageService.deleteMovie(filmInfo, movieKey);

                queueBtn.classList.remove('visually-hidden');
                queueBtnDelete.classList.add('visually-hidden');

            });
      
  });
}

function renderOfModal(item) {
  const { vote_average, original_title, genres, overview, popularity, poster_path, vote_count } =
    item;
  console.log(genres);
  const listOfGenres = genres.length > 0 ? genres.map(genre => genre.name) : [];
  let poster = emptyImg;
  if (poster_path) {
    poster = `https://image.tmdb.org/t/p/w500${poster_path}`;
  }
    return `
        <div class="modal_info">
            <div class="modal_pic-block">
                <img class="modal_pic" src=${poster} width="240px" height="357px" alt="${original_title}">
            </div>
            
            <div class="modal_info-block">
                <h2 class="modal_title">${original_title}</h2>
            
                <table class="modal_info">
                    <tr>
                        <td class="modal_info-colonm1">Vote / Votes</td>
                        <td class="modal_info-colonm2 rating-cell">
                            <div class="modal_info-rating">
                                <span>${vote_average}</span>
                            </div>
                            <span class="modal_info-line">/</span>
                            <div class="modal_info-votes">
                                <span>${vote_count}</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="modal_info-colonm1">Popularity</td>
                        <td class="modal_info-colonm2">${popularity}</td>
                    </tr>
                    <tr>
                        <td class="modal_info-colonm1">Original Title</td>
                        <td class="modal_info-colonm2 orig_title">${original_title}</td>
                    </tr>
                    <tr>
                        <td class="modal_info-colonm1">Genre</td>
                        <td class="modal_info-colonm2">${listOfGenres.join(', ')}</td>
                    </tr>
                </table>
            
                <h3 class="modal_title-disc">About</h3>
                <p class="modal_disc">${overview}
                </p>

                <div class="modal_buttons">
                    <button type="button" data-key="watched" class="modal_button modal_button-watch">
                        add to Watched
                    </button>
                    <button type="button" data-key="watched" class="modal_button modal_button-watch btn_watch-del visually-hidden">
                        Delete from watched
                    </button>
                    <button type="button" data-key="queue" class="modal_button modal_button-queue">
                        add to queue
                    </button>
                    <button type="button" data-key="queue" class="modal_button modal_button-queue btn_queue-del visually-hidden">
                        Delete from queue
                    </button>
                </div>
            </div>
        </div>
    `;
}

const renderMarkupOfModal = item => {
  const markup = renderOfModal(item);
    refs.backdrop.classList.remove('is-hidden');
    refs.modalInfo.innerHTML = markup;
};


// const onCloseModal = () => {};
// adult: false
// backdrop_path: "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg"
// belongs_to_collection: {id: 531241, name: 'Spider-Man (Avengers) Collection', poster_path: '/nogV4th2P5QWYvQIMiWHj4CFLU9.jpg', backdrop_path: '/AvnqpRwlEaYNVL6wzC4RN94EdSd.jpg'}
// budget: 200000000
// genres: (3) [{…}, {…}, {…}]
// homepage: "https://www.spidermannowayhome.movie"
// id: 634649
// imdb_id: "tt10872600"
// original_language: "en"
// original_title: "Spider-Man: No Way Home"
// overview: "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man."
// popularity: 5792.421
// poster_path: "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
// production_companies: (3) [{…}, {…}, {…}]
// production_countries: [{…}]
// release_date: "2021-12-15"
// revenue: 1888000000
// runtime: 148
// spoken_languages: (2) [{…}, {…}]
// status: "Released"
// tagline: "The Multiverse unleashed."
// title: "Spider-Man: No Way Home"
// video: false
// vote_average: 8.2
// vote_count: 11416
