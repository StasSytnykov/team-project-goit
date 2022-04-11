import emptyImg from './images/img_not_found.jpg';
import getGenres from './searchMovie';
import genresArr from './searchMovie';

function makeMovieMarkup(movies) {
  return movies
    .map(({ title, release_date, genre_ids, poster_path }) => {
      const filteredGenresArr = genresArr
        .filter(genreId => genre_ids.includes(genreId.id))
        .map(genre => genre.name)
        .slice(0, 2);
      const releaseYear = new Date(release_date).getFullYear();
      let poster = emptyImg;
      if (poster_path) {
        poster = `https://image.tmdb.org/t/p/w500${poster_path}`;
      }
      return `<div class="photo-card">
        <div class="thumb">
            <img class="image" src=${poster}
              alt="${title}"
              loading="lazy"
              width="309"
              height="449" />
        </div>
        <div class="info">
          <h5 class="info-item">${title}
          </h5>
          <div class="info-item2">
          <p class="info-item">${genre_ids}
          </p>
          <p class="info-item">${releaseYear}
          </p>
          </div>
        </div>
    </div>`;
    })
    .join('');
}

export default makeMovieMarkup;
