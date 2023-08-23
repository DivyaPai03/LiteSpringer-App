import View from "./view.js";
class PreviewMarkupView extends View {
  _parentEl = "";

  _createMarkup() {
    const id = window.location.hash.slice(1);
    return `<li class="preview">
    <a href="#${this.data.doi}" class="preview__link ${
      this.data.doi == id ? "preview__link-selected" : ""
    }">
    <div class="preview__data">
        <div class="preview__title">${this.data.title}</div>
        <div class="preview__creators">${this.data.creators}</div>
        <div><span class="preview__publication--name">${
          this.data.publicationName
        }</span>
            <span class="preview__publication--year">(${
              this.data.publicationYear
            })</span><span class="preview__doi">${this.data.doi}</span>
        </div>
        <div class="preview__abstract">${this.data.abstract}</div>
    </div>
    </a>
    </li> `;
  }
}
export default new PreviewMarkupView();
