import emptyImg from '../js/images/img_not_found.jpg';

function makeMovieMarkup(movies) {
  return movies
    .map(({ title, release_date, genre_ids, poster_path }) => {
      const releaseYear = new Date(release_date).getFullYear();
      let poster = emptyImg;
      if (poster_path) {
        poster = `https://image.tmdb.org/t/p/w500${poster_path}`;
      }
      return `<div class="photo-card">
        <div class="thumb">
            <img class="image" src="https://image.tmdb.org/t/p/w500${poster}"
              alt="${title}"
              loading="lazy"
              width="309"
              height="449" />
        </div>
        <div class="info">
          <h5 class="info-item">${title}
          </h5>
          <p class="info-item">${genre_ids}
          </p>
          <p class="info-item">${releaseYear}
          </p>
        </div>
    </div>`;
    })
    .join('');
}

export default makeMovieMarkup;
