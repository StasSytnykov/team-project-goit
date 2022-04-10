import refs from './refs';

const containerHeader = document.querySelector(".container");
const libraryClick = (Event) => {
    Event.preventDefault();
    refs.spanHome.style.display = "none";
    refs.spanLibrary.style.display = "block";
    refs.searchBtn.style.display = "none";
    refs.libraryBtnList.classList.remove("not-displayed");
    refs.libraryBtnList.classList.add("button-list");
    containerHeader.style.backgroundImage = "url('http://localhost:1234/Header-library.7557c1cd.jpg')";
    //containerHeader.style.backgroundImage = "url('../images/header/Header-library.jpg')";
}



refs.libraryLi.addEventListener("click", libraryClick);

