import View from "./view.js";
class SearchView extends View {
  _parentEl = document.querySelector(".search");

  getQuery() {
    const query = this._parentEl.querySelector(".search__field").value;
    console.log("parentEl", this._parentEl);
    this._clearInputField();
    return query;
  }
  _clearInputField() {
    this._parentEl.querySelector(".search__field").value = "";
  }
  addHandlerSearch(controllerFunction) {
    this._parentEl.addEventListener("submit", function (e) {
      e.preventDefault();
      controllerFunction();
    });
  }
}

export default new SearchView();
