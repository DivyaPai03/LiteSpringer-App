import View from "./view.js";
class ResultsView extends View {
  _parentEl = document.querySelector(".results");
  _errorMessage = `Sorry, we could not find any matches for your search. Why not..
  <ul class="error__correction">
  <li>Make sure that all words are spelled correctly</li>
  <li>Try more general keywords</li>
  <li>Try different keywords</li>
</ul>`;

  _createMarkup() {
    console.log("render data variable:", this.data);
    return this.data.map(this._createMarkupPreview).join("");
  }
  _createMarkupPreview(res) {
    return `<li class="preview">
    <a href="#${res.doi}" class="preview__link">
    <div class="preview__data">
        <div class="preview__title">${res.title}</div>
        <div class="preview__creators">${res.creator}</div>
        <div><span class="preview__publication--name">${res.publicationName}</span>
            <span class="preview__publication--year">(${res.publicationYear})</span><span class="preview__doi">${res.doi}</span>
        </div>
        <div class="preview__abstract">${res.abstract}</div>
    </div>
    </a>
    </li> `;
  }
}
export default new ResultsView();
