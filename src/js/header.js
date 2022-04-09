
myRefs = {
    library: document.querySelector(".library"),
    home: document.querySelector(".home"),
    spanHome: document.querySelector(".span-home"),
    spanLibrary: document.querySelector(".span-library")

}

const libraryClick = (Event) => {
    Event.preventDefault();
    myRefs.spanHome.style.display = "none";
    myRefs.spanLibrary.style.display = "block";
    
}
const homeClick = (Event) => {
    Event.preventDefault();
    myRefs.spanLibrary.style.display = "none";
    myRefs.spanHome.style.display = "block";
    
}

myRefs.library.addEventListener("click", libraryClick);
myRefs.home.addEventListener("click", homeClick);


