import icons from "../../img/icons.svg";
export default class View {
  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      throw new Error("#");
    this.data = data;
    const markup = this._createMarkup();
    this._clear();
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }
  _clear() {
    this._parentEl.innerHTML = "";
  }
  _renderError(message = this._errorMessage) {
    const markup = `<div class="error">
    
    <div>
        <div class="error__text">
            <svg class="circle__exclamation">
                <use href="${icons}#icon-circle-exclamation"></use>
            </svg>
            <p>${message}</p>
        </div>
        
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
}
