import refs from './refs';

const headerContainer = document.querySelector('.container');

const onClickHomeBtn = () => {
    headerContainer.innerHTML = `<nav class='nav'>
    <img class='img__logo' src='./images/header/film.png' alt='' />
    <a class='nav__logo'>Filmoteka</a>
    <ul class='nav__list'>
      <li class='nav__list-item home'>
        <a class='nav__list-link' href=''>Home</a><span class='span span-home'></span>
      </li>
      <li class='nav__list-item library'>
        <a class='nav__list-link' href=''>My Library</a><span class='span span-library'></span>
      </li>
    </ul>
  </nav>
  <form class='search-form' id='search-form'>
    <div class='wrap'>
      <input
        class='input'
        type='text'
        name='searchQuery'
        autocomplete='off'
        placeholder='Поиск фильмов'
      />
      <button class='search-btn' type='submit'>
        <svg
          class='search-svg'
          width='13'
          height='13'
          viewBox='0 0 12 12'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M5.5 9.5C7.70914 9.5 9.5 7.70914 9.5 5.5C9.5 3.29086 7.70914 1.5 5.5 1.5C3.29086 1.5 1.5 3.29086 1.5 5.5C1.5 7.70914 3.29086 9.5 5.5 9.5Z'
            stroke='white'
            stroke-linecap='round'
            stroke-linejoin='round'
          ></path>
          <path
            d='M10.5 10.5002L8.32495 8.3252'
            stroke='white'
            stroke-linecap='round'
            stroke-linejoin='round'
          ></path>
        </svg>
      </button>
    </div>
  </form>`;
};

refs.homeLi.addEventListener('click', onClickHomeBtn);
