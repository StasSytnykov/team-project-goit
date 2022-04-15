import refs from './refs';

window.addEventListener('scroll', onScroll);
refs.toBtnTop.addEventListener('click', onToTopBtn);

function onScroll() {
  const scrolled = window.pageYOffset
  const coords = document.documentElement.clientHeight

  if (scrolled > coords) {
    refs.toBtnTop.classList.add('btn-to-top--visible')
  }
  if (scrolled < coords) {
    refs.toBtnTop.classList.remove('btn-to-top--visible')
  }
}

function onToTopBtn() {
  if (window.pageYOffset > 0) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

