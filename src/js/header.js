import refs from './refs';

const containerHeader = document.querySelector(".container");
function foo(elemClose,elemOpen) {
    elemClose.style.display = "none";
    elemOpen.style.display = "block";
}
function goo(del, add) {
    refs.libraryBtnList.classList.remove(del);
    refs.libraryBtnList.classList.add(add);
}

const libraryClick = (Event) => {
    Event.preventDefault();
    foo(refs.spanHome, refs.spanLibrary);
    refs.searchBtn.style.display = "none";
    goo("not-displayed","button-list")
    containerHeader.style.backgroundImage = "url('http://localhost:1234/Header-library.7557c1cd.jpg')";
    //containerHeader.style.backgroundImage = "url('../images/header/Header-library.jpg')";
}

const homeClick = (Event) => {
    Event.preventDefault();
    foo(refs.spanLibrary, refs.spanHome);
    goo("button-list","not-displayed")
    refs.searchBtn.style.display = "block";
    containerHeader.style.backgroundImage = "url('http://localhost:1234/header-mobile-bcg.311d05cf.jpg')";
    
}

refs.libraryLi.addEventListener("click", libraryClick);
refs.homeLi.addEventListener("click", homeClick);

