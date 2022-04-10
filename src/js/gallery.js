import '../css/style.css';
import ApiService from './apiService';
import { Notify } from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import articleTmpl from '../tmpl/article.hbs';

const searchForm = document.querySelector('.search-form');
const loadMore = document.querySelector('.load-more');
const gallerySelector = document.querySelector('.gallery');
const pixabayApi = new ApiService();

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionType: 'alt',
  captionDelay: 200,
  captionPosition: 'bottom',
});

searchForm.addEventListener('submit', onSearchHandler);
loadMore.addEventListener('click', onLoadMoreHandler);

function onSearchHandler(e) {
  e.preventDefault();

  const {
    elements: { searchQuery },
  } = e.target;

  searchQuery.value.trim();

  if (searchQuery.value.trim() === '') {
    return Notify.failure('There is nothing to search!');
  }

  pixabayApi.query = searchQuery.value;
  pixabayApi.resetPage();

  pixabayApi
    .fetchData()
    .then(data => {
      if (data.hits.length === 0) {
        return Notify.failure(
          `Sorry, there are no images matching your search query. Please try again`,
        );
      } else {
        Notify.success(`Hooray! We found ${pixabayApi.hits} images.`);
        return data.hits;
      }
    })
    .then(hits => {
      clearHits();
      appendHitsMarkup(hits);
      loadMoreIsVisible();
      lightbox.refresh();
      endOfSearchResultNotify();
    });
}

function onLoadMoreHandler() {
  pixabayApi.fetchData().then(data => {
    appendHitsMarkup(data.hits);
    loadMoreIsVisible();
    lightbox.refresh();
    endOfSearchResultNotify();
  });
}

function appendHitsMarkup(hits) {
  gallerySelector.insertAdjacentHTML('beforeend', articleTmpl(hits));
}

function clearHits() {
  gallerySelector.innerHTML = '';
}

function loadMoreIsVisible() {
  if (getPagesCount() > pixabayApi.page - 1) {
    loadMore.classList.add('is-visible');
  } else {
    loadMore.classList.remove('is-visible');
  }
}

function getPagesCount() {
  return Math.ceil(pixabayApi.totalHits / pixabayApi.options.params.per_page);
}

function endOfSearchResultNotify() {
  if (getPagesCount() === pixabayApi.page - 1) {
    return Notify.failure("We're sorry, but you've reached the end of search results.");
  }
}