import emptyImg from './images/img_not_found.jpg';
import getGenres from './searchMovie';
import genresArr from './searchMovie';

function makeMovieMarkup(movies) {
  return movies
    .map(
      ({
        title,
        name,
        release_date,
        first_air_date,
        genre_ids,
        genres,
        poster_path,
        vote_average,
        id,
      }) => {
        let filteredGenresArr = 'Other';

        if (genres && genres.length > 0) {
          filteredGenresArr =
            genres
              .reduce((acc, el) => [...acc, el.name], [])
              .slice(0, 2)
              .join(', ') + ', Other';
        }

        if (genre_ids && genre_ids.length !== 0) {
          filteredGenresArr =
            genresArr
              .filter(genreId => genre_ids.includes(genreId.id))
              .map(genre => genre.name)
              .slice(0, 2)
              .join(', ') + ', Other';
        }
        let releaseYear = new Date(release_date).getFullYear();
        let alternativeDate = new Date(first_air_date).getFullYear();
        let poster = emptyImg;
        if (poster_path) {
          poster = `https://image.tmdb.org/t/p/w500${poster_path}`;
        }
        return `<div class="photo-card" id="${id}">
        <div class="gallery-list__item">

            <img class="image" src=${poster}
              alt="${title}"
              loading="lazy"
              width="309"
              height="449" />
        </div>
        <div class="info">
          <h5 class="gallery-list__item-title">${title || name}
          </h5>
          <div class="film-info-cont">
          <p class="film-info">${filteredGenresArr}
          <span class="film-info__slash">|</span>
          </p>
          <p class="film-info__year">${releaseYear || alternativeDate || ''}
          <span class="film-info__rate">${vote_average}</span>
          </p>
          </div>
        </div>
    </div>`;
      },
    )
    .join('');
}

export default makeMovieMarkup;
