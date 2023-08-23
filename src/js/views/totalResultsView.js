import View from "./view.js";

class TotalResultsView extends View {
  _parentEl = document.querySelector(".total__results");
  _createMarkup() {
    return `<p> <b>${this.data.totalResults}</b> result(s) for <b>"${
      this.data.query
    }"</b></p>
    <div>Showing Page <b>${this.data.pageIndex} / ${Math.ceil(
      this.data.totalResults / this.data.resultsPerPage,
    )}</b></div>`;
  }
}
export default new TotalResultsView();
