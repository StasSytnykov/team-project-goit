console.log("rlsjkfs")
refs = {
    headerNav: document.querySelector(".nav__list"),
}
console.log(refs.emphasisSpan)

const buttonSelection = (event) => {
    event.preventDefault()
    if (event.target.nodeName !== "LI") {
        return;

    }
    console.log("jisdf;")
}

refs.headerNav.addEventListener("click", buttonSelection);
