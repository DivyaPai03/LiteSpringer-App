import icons from "../../img/icons.svg";
export default class View {
  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0)) throw new Error();
    this.data = data;
    const markup = this._createMarkup();
    if (!render) return markup;
    this._clear();
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }
  _clear() {
    this._parentEl.innerHTML = "";
  }
  _renderError(message = this._errorMessage, renderBookmarkIcon = false) {
    const markup = `<div class="error">
    
    <div>
        <div class="error__text">
            <p><svg class="circle__exclamation">
            <use href="${icons}#icon-${
      renderBookmarkIcon ? "face-frown" : "circle-exclamation"
    }"></use>
        </svg>${message}</p></div>
        
        
    </div>
</div>`;
    this._clear();

    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }
  renderLoader() {
    const markup = `<div class="loader__div">
    <svg class="loader">
        <use href="${icons}#icon-loader"></use>
    </svg>
</div>`;
    this._clear();
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }
  renderMessage() {
    const markup = `<div class="message">
    <p> ${this.data.length} Result(s) for ${this.data.query}:('</p>
        <div>
          <svg>
            <use href="${icons}#icon-smile"></use>
          </svg>
        </div>
        
      </div>`;
    this._clear();
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }

  update(data) {
    this.data = data;
    const virtualMarkup = this._createMarkup();
    const virtualDOM = document
      .createRange()
      .createContextualFragment(virtualMarkup);
    const virtualElements = Array.from(virtualDOM.querySelectorAll("*"));
    const realElements = Array.from(this._parentEl.querySelectorAll("*"));
    virtualElements.forEach((virtualEl, i) => {
      const realEl = realElements[i];
      //   updating the changed text
      if (
        !virtualEl.isEqualNode(realEl) &&
        virtualEl.firstChild?.nodeValue.trim() !== ""
      ) {
        realEl.textContent = virtualEl.textContent;
      }
      //  updating the changed attributes
      if (!virtualEl.isEqualNode(realEl)) {
        Array.from(virtualEl.attributes).forEach((attribute) => {
          realEl.setAttribute(attribute.name, attribute.value);
        });
      }
    });
  }
}
