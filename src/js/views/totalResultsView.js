import View from "./view.js";

class TotalResultsView extends View {
  _parentEl = document.querySelector(".total__results");
  _createMarkup() {
    return `<p> ${this.data.totalResults} result(s) for "${this.data.query}"</p>
    <div>Showing Page ${this.data.pageIndex} / ${Math.ceil(
      this.data.totalResults / this.data.resultsPerPage,
    )}</div>`;
  }
}
export default new TotalResultsView();
