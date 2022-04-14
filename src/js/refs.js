const refs = {
  searchBtn: document.querySelector('.search-form'),
  libraryBtn: document.querySelector('header'),
  galleryMovies: document.querySelector('.gallery-movies'),
  watchedBtn: document.querySelector('button[name=watched]'),
  headerBtn: document.querySelectorAll('.library-button'),
  containerHeader: document.querySelector('.content'),
  libraryLi: document.querySelector('.library'),
  homeLi: document.querySelector('.home'),
  spanHome: document.querySelector('.span-home'),
  spanLibrary: document.querySelector('.span-library'),
  libraryBtnList: document.querySelector('.button__list__library'),
  closeModalBtn: document.querySelector('.modal__close-btn'),
  backdrop: document.querySelector('.backdrop'),
  emptyResult: document.querySelector('.empty-result'),
  backgroundContent: document.querySelector('.content'),
  logo: document.querySelector('.nav__logo'),
  footerLink: document.querySelector('.footer__modal-open'),
  footerBackdrop: document.querySelector('[data-action="deleted-class"]'),
  modalCloseBtn: document.querySelector('.footer-modal__close-btn'),
};

export default refs;
