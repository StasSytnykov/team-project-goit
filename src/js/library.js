import refs from './refs';
import makeMovieMarkup from './moviesMarkup';

refs.libraryBtn.addEventListener('click', library);
refs.libraryLi.addEventListener('click', libraryClick);

function library(ev) {
  if (ev.target.type !== 'button') return;

  const data = JSON.parse(localStorage.getItem(ev.target.name));

  if (!ev.target.classList.contains('active')) {
    refs.headerBtn.forEach(el => {
      el.classList.remove('active');
    });
    ev.target.classList.add('active');
  }
  if (data && data.length > 0) {
    const markup = makeMovieMarkup(data);
    refs.galleryMovies.innerHTML = markup;
    return;
  }
  refs.galleryMovies.innerHTML = '<p class="empty-library"> There are no films added.<p>';
}

function libraryClick(ev) {
  ev.preventDefault();
  refs.spanHome.style.display = 'none';
  refs.spanLibrary.style.display = 'block';
  refs.searchBtn.style.display = 'none';
  refs.libraryBtnList.style.display = 'flex';
  refs.containerHeader.classList.add('library-content');

  refs.libraryBtnList.style.display = 'flex';
  refs.watchedBtn.classList.add('active');

  const data = JSON.parse(localStorage.getItem('watched'));

  if (data && data.length > 0) {
    const markup = makeMovieMarkup(data);
    refs.galleryMovies.innerHTML = markup;
    return;
  }
  refs.galleryMovies.innerHTML = '<p class="empty-library"> There are no films added.<p>';
}
