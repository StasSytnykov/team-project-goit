const paginationRef = document.querySelector('.pagination')

function renderPagination(totalPages) {

  
    paginationRef.innerHTML = `
    <div class="pagination__list">
    <button class="pagination__arrow prev">
      <svg class="pagination__arrow-svg" width="10" height="10">
        <use href="./images/icons/pagination.svg#arrow-left"></use>
      </svg>
    </button>
    <button type="button" class="pagination__page first">1</button>
    <div type="button" class="pagination__page dots-prev">&middot&middot&middot</div>
    <button type="button" class="pagination__page before-page__before">0</button>
    <button type="button" class="pagination__page before-page">0</button>
    <button type="button" class="pagination__page current-page">1</button>
    <button type="button" class="pagination__page after-page">2</button>
    <button type="button" class="pagination__page after-page__after">3</button>
    <div type="button" class="pagination__page dots-last">&middot&middot&middot</div>
    <button type="button" class="pagination__page last">${totalPages}</button>
    <button type="button" class="pagination__arrow next">
      <svg class="pagination__arrow-svg" width="10" height="10">
        <use href="./images/icons/pagination.svg#arrow-right"></use>
      </svg>
    </button>
  </div>`
}

export default renderPagination;