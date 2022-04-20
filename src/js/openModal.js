import refs from './refs';
import ApiService from './api-service';
import genresArr from './searchMovie';
import emptyImg from './images/img_not_found.jpg';
import LocalStorageService from '../js/local-storage';
import oopsImg from './images/oops.png';
import onEscBtnClick from './modal';
const newFetchMovieById = new ApiService();
const localStorageService = new LocalStorageService();

refs.galleryMovies.addEventListener('click', onOpenModal);

function onOpenModal(e) {
  window.addEventListener('keydown', onEscBtnClick);
  refs.body.style.overflow = 'hidden';
  if (!e.target.parentElement.parentElement.classList.contains('photo-card')) {
    return;
  }
  // console.log(e.target);
  let idOfCard = e.target.closest('.photo-card').id;
  const fetchResponse = newFetchMovieById.fetchInfoOfFilm(idOfCard);
  renderMarkupOfModal(fetchResponse);

  //   Добавил функции добавления фильма в local storage

  const watchBtn = document.querySelector('.modal_button-watch');
  const watchBtnDelete = document.querySelector('.btn_watch-del');
  const queueBtn = document.querySelector('.modal_button-queue');
  const queueBtnDelete = document.querySelector('.btn_queue-del');

  const watchedLibrary = localStorageService.checkMovie(fetchResponse, 'watched');
  const queueLibrary = localStorageService.checkMovie(fetchResponse, 'queue');

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
      localStorageService.deleteMovie(fetchResponse, 'queue');

      queueBtn.classList.remove('visually-hidden');
      queueBtnDelete.classList.add('visually-hidden');
    }

    const movieKey = event.target.dataset.key;
    localStorageService.addMovie(fetchResponse, movieKey);

    watchBtn.classList.add('visually-hidden');
    watchBtnDelete.classList.remove('visually-hidden');
  });

  watchBtnDelete.addEventListener('click', function deleteMovieFromStorage(event) {
    const movieKey = event.target.dataset.key;
    localStorageService.deleteMovie(fetchResponse, movieKey);

    watchBtn.classList.remove('visually-hidden');
    watchBtnDelete.classList.add('visually-hidden');
  });

  queueBtn.addEventListener('click', function onQueueBtnClick(event) {
    if (watchedLibrary) {
      localStorageService.deleteMovie(fetchResponse, 'watched');

      watchBtn.classList.remove('visually-hidden');
      watchBtnDelete.classList.add('visually-hidden');
    }

    const movieKey = event.target.dataset.key;
    localStorageService.addMovie(fetchResponse, movieKey);

    queueBtn.classList.add('visually-hidden');
    queueBtnDelete.classList.remove('visually-hidden');
  });

  queueBtnDelete.addEventListener('click', function deleteQueueFromStorage(event) {
    const movieKey = event.target.dataset.key;
    localStorageService.deleteMovie(fetchResponse, movieKey);

    queueBtn.classList.remove('visually-hidden');
    queueBtnDelete.classList.add('visually-hidden');
  });

  if (!fetchResponse) {
    renderOfErrorMarkup();
  }
}

function renderOfModal(item) {
  const {
    vote_average,
    original_title,
    genre_ids,
    overview,
    popularity,
    poster_path,
    vote_count,
    original_name,
  } = item;

  let listOfGenres = [];

  if (genre_ids && genre_ids.length !== 0) {
    listOfGenres = genresArr
      .filter(genreId => genre_ids.includes(genreId.id))
      .map(genre => genre.name);
  }

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
              <h2 class="modal_title">${original_name || original_title}</h2>

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
                  <div class="modal_info-value orig_title">${original_name || original_title}</div>
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

const renderOfErrorMarkup = () => {
  const markup = renderOfError();
  refs.backdrop.classList.remove('is-hidden');
  refs.modalInfo.innerHTML = markup;
};
