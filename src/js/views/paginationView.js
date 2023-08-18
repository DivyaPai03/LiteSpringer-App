import View from "./view.js";
import icons from "../../img/icons.svg";
class PaginationView extends View {
  _parentEl = document.querySelector(".pagination");
  addHandlerPagination(controllerFunction) {
    this._parentEl.addEventListener("click", function (e) {
      const btnClicked = e.target.closest(".pagination__btn");
      const goToResultIndex = +btnClicked.dataset.gotoresultindex;
      const goToPageIndex = +btnClicked.dataset.gotopageindex;
      controllerFunction(goToResultIndex, goToPageIndex);
    });
  }
  _createMarkup() {
    const currentPage = +this.data.pageIndex;
    const resIndex = +this.data.resultIndex;
    const perPage = this.data.resultsPerPage;
    const numberOfPages = Math.ceil(
      +this.data.totalResults / this.data.resultsPerPage,
    );

    if (currentPage === 1 && numberOfPages > 1) {
      return `<div class="previous"></div><a href="#top"><div class="next">
    <button class="pagination__btn pagination__btn--next" data-gotoresultindex="${
      resIndex + perPage
    }" data-gotopageindex="${currentPage + 1}">
    <span>Page ${currentPage + 1}</span>
        <svg class="arrow__right">
            <use href="${icons}#icon-arrow-right"></use>
        </svg>
        
    </button> </div></a>`;
    }
    if (currentPage < numberOfPages) {
      return `<a href="#top"><div class="previous"><button class="pagination__btn pagination__btn--previous" data-gotoresultindex="${
        resIndex - perPage
      }" data-gotopageindex="${currentPage - 1}">
        
        <svg class="arrow__left">
            <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${currentPage - 1}</span>
       
    </button></div></a>
    <a href="#top"><div class="next">
    <button class="pagination__btn pagination__btn--next" data-gotoresultindex="${
      resIndex + perPage
    }" data-gotopageindex="${currentPage + 1}">
    <span>Page ${currentPage + 1}</span>
        <svg class="arrow__right">
            <use href="${icons}#icon-arrow-right"></use>
        </svg>
       
    </button> </div></a>`;
    }
    if (currentPage === numberOfPages && numberOfPages > 1) {
      return `<a href="#top"><div class="previous"><button class="pagination__btn pagination__btn--previous" data-gotoresultindex="${
        resIndex - perPage
      }" data-gotopageindex="${currentPage - 1}">
        
        <svg class="arrow__left">
            <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${currentPage - 1}</span>
    </button></div></a><div class="next"></div>`;
    }
    return "";
  }
}
export default new PaginationView();
