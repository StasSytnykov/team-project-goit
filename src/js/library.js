import refs from './refs';

async function getData(page, key) {
  const data = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=c650d1c0c307d1ff6855b3a117a6cfa1&page=${page}`,
  )
    .then(responce => responce.json())
    .then(data => {
      console.log(data.results);
      localStorage.setItem(key, JSON.stringify(data.results));
      console.dir(localStorage);
    });
}
getData(1, 'watched');
// getData(2, 'queue');

// console.log(localStorage);

refs.libraryBtn.addEventListener('click', library);

function library(ev) {
  if (ev.target.type !== 'button') return;
  if (localStorage.getItem(ev.target.name)) {
    // render films
    refs.filmContainer.innerHTML = `There are a lot of films choised by you in ${ev.target.name} section`;
    return;
  }
  refs.filmContainer.innerHTML = `There are NO films choised by you in ${ev.target.name} section`;
  //   render string "This list is empty"
}
