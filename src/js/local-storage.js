import { libMain } from './library';
import refs from './refs';

export default class LocalStorageService {
  constructor() {
    this._watched = [];
    this._queue = [];
  }

  //Library

  getMovie(key) {
    const watchedParseList = JSON.parse(localStorage.getItem(key));

    return watchedParseList;
  }

  addMovie(obj, key) {
    switch (key) {
      case 'watched':
        if (this.getMovie(key) === null) {
          this._watched.push(obj);

          const userDataJSON = JSON.stringify(this._watched);

          localStorage.setItem('watched', userDataJSON);
        }

        let libraryWatched = this.getMovie(key);

        if (libraryWatched.find(item => item.id !== obj.id) || libraryWatched.length === 0) {
          libraryWatched.push(obj);

          const userDataJSON = JSON.stringify(libraryWatched);

          localStorage.setItem('watched', userDataJSON);
        }

        break;

      case 'queue':
        if (!this.getMovie(key)) {
          this._queue.push(obj);

          const userDataJSON = JSON.stringify(this._queue);

          localStorage.setItem('queue', userDataJSON);
        }

        let libraryQueue = this.getMovie(key);

        if (libraryQueue.find(item => item.id !== obj.id) || libraryQueue.length === 0) {
          libraryQueue.push(obj);

          const userDataJSON = JSON.stringify(libraryQueue);

          localStorage.setItem('queue', userDataJSON);
        }

        break;
    }
  }

  deleteMovie(obj, key) {
    let library = this.getMovie(key);
    let movieIndex = library.findIndex(item => item.id === obj.id);

    library.splice(movieIndex, 1);
    const userDataJSON = JSON.stringify(library);

    switch (key) {
      case 'watched':
        localStorage.setItem('watched', userDataJSON);

        break;

      case 'queue':
        localStorage.setItem('queue', userDataJSON);

        break;
    }
    if ([...refs.headerBtn].filter(el => el.name === key)[0].classList.contains('active')) {
      libMain(key);
      refs.backdrop.classList.add('is-hidden');
    }
  }

  checkMovie(obj, key) {
    let library = this.getMovie(key);

    if (library) {
      if (library.find(item => item.id === obj.id)) return true;
    }
  }
}
