import refs from './refs';

const containerHeader = document.querySelector(".container");
const libraryClick = (Event) => {
    Event.preventDefault();
    refs.spanHome.style.display = "none";
    refs.spanLibrary.style.display = "block";
    refs.searchBtn.style.display = "none";
    refs.libraryBtnList.classList.remove("not-displayed");
    refs.libraryBtnList.classList.add("button-list");
    
    containerHeader.style.backgroundImage = "url('../images/header/Header-library.jpg')";
    
}
const homeClick = (Event) => {
    Event.preventDefault();
    refs.spanLibrary.style.display = "none";
    refs.spanHome.style.display = "block";
    refs.libraryBtnList.classList.remove("button-list");
    refs.libraryBtnList.classList.add("not-displayed");
    refs.searchBtn.style.display = "block";
    containerHeader.style.backgroundImage = "url('../images/header/header-mobile-bcg.jpg')";
    
}

refs.libraryLi.addEventListener("click", libraryClick);
refs.homeLi.addEventListener("click", homeClick);

