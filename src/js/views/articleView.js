import icons from "../../img/icons.svg";
import { BUYARTICLE_URL, DOWNLOAD_ARTICLE_PDF_URL } from "../config.js";
import View from "./view.js";

class ArticleView extends View {
  _parentEl = document.querySelector(".article");
  _errorMessage = `Cannot load the article you have selected. Try again!`;

  data;
  addHandlerRender(controllerFunction) {
    ["hashchange", "load"].forEach((event) =>
      window.addEventListener(event, controllerFunction),
    );
  }
  addHandlerBookmark = function (controllerFunction) {
    this._parentEl.addEventListener("click", function (e) {
      const btnClicked = e.target.closest(".article__bookmark");
      if (!btnClicked) return;
      controllerFunction();
    });
  };

  _createMarkup() {
    // console.log(this.data.title);
    const buy__link = `<button class=" nav__btn ><a href="${BUYARTICLE_URL}${this.data.doi}" target="_blank">Buy Article</a>`;
    const download__btn = `<a href="${DOWNLOAD_ARTICLE_PDF_URL}id=doi:${this.data.doi}" target="_blank" class="download_link"><button class=" nav__btn  article__download ">
    <span>Download pdf</span>
    <svg class="download">
    <use href="${icons}#icon-download"></use>
    
</svg>
</button></a>`;
    const lockIcon = `
    <a href="${BUYARTICLE_URL}${this.data.doi}" target="_blank"><svg class="lock">
        <use href="${icons}#icon-lock"></use>
    </svg></a>
   `;
    return `<div class="article__data">
    <div class="article__publication--type">${this.data.publicationType} ${
      this.data.openAccess == "true" ? "OPEN ACCESS" : lockIcon
    }</div>
    <div class="article__title">${this.data.title}</div>
    <div class="article__creators">${this.data.creators}</div>
    <div><span class="article__publication--name">${
      this.data.publicationName
    } </span>
        <span class="article__publication--year">(${
          this.data.publicationYear
        }) </span><span class="article__doi">doi: ${this.data.doi}</span>
    </div>
    <div class="buttons">
        <button class=" nav__btn  article__bookmark ">

            <svg class="bookmark bookmark-fill">
                <use href="${icons}#icon-bookmark${
      this.data.bookmarkValue ? "-fill" : ""
    }"></use>
            </svg>
            <span>Bookmark</span>
        </button>

        <div>${this.data.openAccess == "true" ? download__btn : buy__link}</div>

    </div>
</div>
<div class="abstract__section">
    <div class="heading">Abstract</div>
    <div class="article__full--abstract">${this.data.abstract}</div>
</div>
</div> `;
  }
}
export default new ArticleView();
/*        <button class="article__notes nav__btn ">

            <svg class="note__sticky">
                <use href="${icons}#icon-note-sticky"></use>
            </svg>
            <span>Add notes</span>
        </button> */
