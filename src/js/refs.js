const refs = {
  closeIcon: document.querySelector('.modal__close-icon'),
  modal: document.querySelector('.modal'),
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
  body: document.querySelector('body'),
  footerModal: document.querySelector('div[data-action="check-theme"]'),
  modalCloseBtn: document.querySelector('.footer-modal__close-btn'),
  toBtnTop: document.querySelector('.btn-to-top'),
  spiner: document.querySelector('.foo'),
  modalInfo: document.querySelector('.modal_info-total'),
  tui: document.querySelector('.tui-pagination'),
  pagi: document.querySelector('.pagination__list'),
  pagidiv: document.querySelector('.pagination'),
  prevPageRef: document.querySelector('.prev'),
  nextPageRef: document.querySelector('.next'),
  currentPageRef: document.querySelector('.current-page'),
  beforeCurrentPageRef: document.querySelector('.before-page'),
  afterCurrentPageRef: document.querySelector('.after-page'),
  beforeBeforeCurrentPageRef: document.querySelector('.before-page__before'),
  afterAfterCurrentPageRef: document.querySelector('.after-page__after'),
  firstPageRef: document.querySelector('.first'),
  lastPageRef: document.querySelector('.last'),
  prevDotsRef: document.querySelector('.dots-prev'),
  lastDotsRef: document.querySelector('.dots-last'),
  mediaQuery: window.matchMedia('(max-width: 767px)'),
};

export default refs;
