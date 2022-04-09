const paginationRef = document.querySelector(".pagination ul");
let totalPages = 20;
let pPage = 5;

paginationRef.innerHTML = createPagination(totalPages, pPage);
function createPagination(totalPages, pPage){
  let liTag = '';
  let current;
  let beforePage = pPage - 1;
  let afterPage = pPage + 1;
  let beforeBeforePage = pPage - 2;
  let afterAfterPage = pPage + 2;
  if(pPage > 1){ 
    liTag += `<li class="pagination_arrow" onclick="createPagination(totalPages, ${pPage - 1})"><span><svg class="pagination_arrow-svg" width="10" height="10">
          <use href="./images/icons/pagination.svg#arrow-left"></use>
        </svg></span></li>`;
  }

  if(pPage > 3){ 
    liTag += `<li class="pagination_page number hidden" onclick="createPagination(totalPages, 1)"><span>1</span></li>`;
    if(pPage > 4){ 
      liTag += `<li class="pagination_page hidden"><span>&middot&middot&middot</span></li>`;
    }
  }

  
  if (pPage == totalPages) {
    beforePage = beforePage - 2;
  } else if (pPage == totalPages - 1) {
    beforePage = beforePage - 1;
  }
  
  if (pPage == 1) {
    afterPage = afterPage + 2;
  } else if (pPage == 2) {
    afterPage  = afterPage + 1;
  }

  for (let pLength = beforeBeforePage; pLength <= afterAfterPage; pLength++) {
    if (pLength > totalPages) { 
      continue;
    }

    if (pLength == -1) { 
      pLength = pLength + 2;
    }

    if (pLength == 0) { 
      pLength = pLength + 1;
    }
    
    if(pPage == pLength){
      current = "current-page";
    }else{ 
      current = "";
    }

    liTag += `<li class="pagination_page number ${current}" onclick="createPagination(totalPages, ${pLength})"><span>${pLength}</span></li>`;
  }

  if(pPage < totalPages - 2){ 
    if(pPage < totalPages - 3){ 
      liTag += `<li class="pagination_page hidden"><span>&middot&middot&middot</span></li>`;
    }
    liTag += `<li class="pagination_page number hidden" onclick="createPagination(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
  }

  if (pPage < totalPages) { 
    liTag += `<li class="pagination_arrow" onclick="createPagination(totalPages, ${pPage + 1})"><span><svg class="pagination_arrow-svg" width="10" height="10">
          <use href="./images/icons/pagination.svg#arrow-right"></use>
        </svg></span></li>`;
  }
  paginationRef.innerHTML = liTag; 
  return liTag;
}

