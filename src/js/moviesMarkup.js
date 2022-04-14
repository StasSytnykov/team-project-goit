import emptyImg from './images/img_not_found.jpg';
import getGenres from './searchMovie';
import genresArr from './searchMovie';

function makeMovieMarkup(movies) {
  return movies
    .map(({ title, name, release_date, first_air_date, genre_ids, poster_path, vote_average, id }) => {
      const filteredGenresArr = genresArr
        .filter(genreId => genre_ids.includes(genreId.id))
        .map(genre => genre.name)
        .slice(0, 2);
      const releaseYear = new Date(release_date).getFullYear();
      let poster = emptyImg;
      if (poster_path) {
        poster = `https://image.tmdb.org/t/p/w500${poster_path}`;
      }
      return `<div class="photo-card" data-id="${id}">
        <li class="gallery-list__item">
            <img class="image" src=${poster}
              alt="${title}"
              loading="lazy"
              width="309"
              height="449" />
        </li>
        <div class="info">
          <h5 class="gallery-list__item-title">${title || name}
          </h5>
          <div class="film-info-cont">
          <p class="film-info">${filteredGenresArr.join(', ') || name}, Other
          <span class="film-info__slash">|</span>
          </p>
          <p class="film-info__year">${releaseYear || first_air_date}
          <span class="film-info__rate">${vote_average}</span>
          </p>
          </div>
        </div>
    </div>`;
    })
    .join('');
}

export default makeMovieMarkup;
