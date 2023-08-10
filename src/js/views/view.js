import icons from "../../img/icons.svg";
export default class View {
  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this._renderError();
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
    <p> Result(s) for '${this.query}:('</p>
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
    console.log(markup);
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
}
