import refs from './refs';
// import makeMovieMarkup from './moviesMarkup';
import template from '../templates/movieCard.hbs';

function libraryClick(ev) {
  ev.preventDefault();
  refs.spanHome.style.display = 'none';
  refs.spanLibrary.style.display = 'block';
  refs.searchBtn.style.display = 'none';
  refs.libraryBtnList.classList.add('flex');
  refs.containerHeader.classList.add('library-content');

  refs.watchedBtn.classList.add('active');
  if (localStorage.getItem('watched')) {
    const data = JSON.parse(localStorage.getItem('watched'));
    const markup = data.map(template).join('\n');
    console.log(markup);
    console.log(typeof markup);
    console.log(refs.filmContainer);
    refs.galleryMovies.innerHTML = markup;
    return;
  }
  refs.galleryMovies.innerHTML = `There are NO films choised by you in watched section`;
}

// refs.libraryLi.addEventListener('click', libraryClick);
