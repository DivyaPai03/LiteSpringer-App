import View from "./view.js";
import PreviewMarkupView from "./previewMarkupView.js";
class ResultsView extends View {
  _parentEl = document.querySelector(".results");
  _errorMessage = `Sorry, we could not find any matches for your search. Why not..
  <ul class="error__correction">
  <li>Make sure that all words are spelled correctly</li>
  <li>Try more general keywords</li>
  <li>Try different keywords</li>
</ul>`;

  _createMarkup() {
    return this.data
      .map((result) => PreviewMarkupView.render(result, false))
      .join("");
  }
}
export default new ResultsView();
