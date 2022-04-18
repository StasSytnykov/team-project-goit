import refs from './refs';
import ApiService from './api-service';
import genresArr from './searchMovie';
import emptyImg from './images/img_not_found.jpg';
import LocalStorageService from '../js/local-storage';
import oopsImg from './images/oops.png';
// function onOpenCard(e) {
//     if(e.curren)
// }
const newFetchMovieById = new ApiService();
const localStorageService = new LocalStorageService();

refs.galleryMovies.addEventListener('click', onOpenModal);

async function onOpenModal(e) {
  if (e.target.parentElement.parentElement.className !== 'photo-card') {
    return;
  }
  let idOfCard = e.target.parentElement.parentElement.id;
  const fetchResponse = await newFetchMovieById
    .fetchInfoOfFilm(idOfCard)
    .then(filmInfo => {
      renderMarkupOfModal(filmInfo);

      //   Добавил функции добавления фильма в local storage

      const watchBtn = document.querySelector('.modal_button-watch');
      const watchBtnDelete = document.querySelector('.btn_watch-del');
      const queueBtn = document.querySelector('.modal_button-queue');
      const queueBtnDelete = document.querySelector('.btn_queue-del');

      const watchedLibrary = localStorageService.checkMovie(filmInfo, 'watched');
      const queueLibrary = localStorageService.checkMovie(filmInfo, 'queue');

      if (watchedLibrary) {
        watchBtn.classList.add('visually-hidden');
        watchBtnDelete.classList.remove('visually-hidden');
      }

      if (queueLibrary) {
        queueBtn.classList.add('visually-hidden');
        queueBtnDelete.classList.remove('visually-hidden');
      }

      watchBtn.addEventListener('click', function addMovieInStorage(event) {
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

      watchBtnDelete.addEventListener('click', function deleteMovieFromStorage(event) {
        const movieKey = event.target.dataset.key;
        localStorageService.deleteMovie(filmInfo, movieKey);

        watchBtn.classList.remove('visually-hidden');
        watchBtnDelete.classList.add('visually-hidden');
      });

      queueBtn.addEventListener('click', function onQueueBtnClick(event) {
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

      queueBtnDelete.addEventListener('click', function deleteQueueFromStorage(event) {
        const movieKey = event.target.dataset.key;
        localStorageService.deleteMovie(filmInfo, movieKey);

        queueBtn.classList.remove('visually-hidden');
        queueBtnDelete.classList.add('visually-hidden');
      });
    })
    .catch(error => {
      if (e.target.closest('.photo-card')) {
        renderOfErrorMarkup(error);
      }
      return;
    });
}

function renderOfModal(item) {
  const { vote_average, original_title, genres, overview, popularity, poster_path, vote_count } =
    item;
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

              <ul class="modal_info-list">
                <li class="modal_info-item">
                  <div class="modal_info-category">Vote / Votes</div>
                  <div class="modal_info-value vote-value">
                    <div class="modal_info-rating">
                      <span>${vote_average}</span>
                    </div>
                    <span class="modal_info-line">/</span>
                    <div class="modal_info-votes">
                      <span>${vote_count}</span>
                    </div>
                  </div>
                </li>
                <li class="modal_info-item">
                  <div class="modal_info-category">Popularity</div>
                  <div class="modal_info-value">${popularity}</div>
                </li>
                <li class="modal_info-item">
                  <div class="modal_info-category">Original Title</div>
                  <div class="modal_info-value orig_title">${original_title}</div>
                </li>
                <li class="modal_info-item">
                  <div class="modal_info-category">Genre</div>
                  <div class="modal_info-value">${listOfGenres.join(', ')}</div>
                </li>
              </ul>
            
              <h3 class="modal_title-disc">About</h3>
              <p class="modal_disc">${overview}</p>

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

const renderOfError = () => {
  let poster = oopsImg;
  return `<div class="modal_info-error">
        <img class="modal-img__error" src="${poster}" />
        <span class="modal-text__error">Sorry, something went wrong:( <br> Please, try again later...</span>
      </div>`;
};

const renderOfErrorMarkup = item => {
  const markup = renderOfError();
  refs.backdrop.classList.remove('is-hidden');
  refs.modalInfo.innerHTML = markup;
};
