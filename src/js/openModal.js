import refs from './refs';
import ApiService from './api-service';
import genresArr from './searchMovie';
import emptyImg from './images/img_not_found.jpg';
// function onOpenCard(e) {
//     if(e.curren)
// }
const newFetchMovieById = new ApiService();

refs.galleryMovies.addEventListener('click', onOpenModal);

async function onOpenModal(e) {
  let idOfCard = e.target.parentElement.parentElement.id;
  const fetchResponse = await newFetchMovieById.fetchInfoOfFilm(idOfCard).then(filmInfo => {
    renderMarkupOfModal(filmInfo);
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
                    <button type="button" class="modal_button modal_button-watch">
                        add to Watched
                    </button>
                    <button type="button" class="modal_button modal_button-queue">
                        add to queue
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
