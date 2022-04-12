import refs from './refs';

const containerHeader = document.querySelector(".content");
const libraryClick = (Event) => {
    Event.preventDefault();
    refs.spanHome.style.display = "none";
    refs.spanLibrary.style.display = "block";
    refs.searchBtn.style.display = "none";
    refs.libraryBtnList.style.display= "flex";
    containerHeader.classList.add("library-content");
}



refs.libraryLi.addEventListener("click", libraryClick);

