import View from "./view.js";
import PreviewMarkupView from "./previewMarkupView.js";
import icons from "../../img/icons.svg";
class BookmarkView extends View {
  _parentEl = document.querySelector(".bookmark__list");
  _errorMessage = `No bookmarks yet. Get the article you want to read and bookmark it.`;

  _createMarkup() {
    return this.data
      .map((result) => PreviewMarkupView.render(result, false))
      .join("");
  }
}
export default new BookmarkView();
