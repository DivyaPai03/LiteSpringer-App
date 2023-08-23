import * as model from "./model.js";
import articleView from "./views/articleView.js";
import searchView from "./views/searchView.js";
import resultsView from "./views/resultsView.js";
import paginationView from "./views/paginationView.js";
import totalResultsView from "./views/totalResultsView.js";
import bookmarkView from "./views/bookmarkView.js";
if (module.hot) {
  module.hot.accept();
}
const controlArticles = async function () {
  try {
    const doi_first_part = window.location.hash.slice(1, 8);
    if (!doi_first_part || doi_first_part == "top") return;
    const doi_second_part = window.location.hash.slice(9);
    resultsView.render(model.articleState.search.results);
    articleView.renderLoader();
    await model.loadArticle(doi_first_part, doi_second_part);
    articleView.render(model.articleState.article);
    bookmarkView.update(model.articleState.bookmarks);
  } catch (err) {
    articleView._renderError();
  }
};
const controlSearch = async function () {
  try {
    paginationView._clear();
    totalResultsView._clear();

    const query = searchView.getQuery();
    if (!query) return;
    model.articleState.search.resultIndex =
      model.articleState.search.pageIndex = 1;

    resultsView.renderLoader();
    await model.loadSearchResults(
      query,
      model.articleState.search.resultIndex,
      model.articleState.search.pageIndex,
    );
    // resultsView.render(model.getPage(4));
    totalResultsView.render(model.articleState.search);
    resultsView.render(model.articleState.search.results);
    paginationView.render(model.articleState.search);
  } catch (err) {
    resultsView._renderError();
  }
};
const controlPagination = async function (resultIndex, pageIndex) {
  // resultsView.renderLoader();
  await model.loadSearchResults(
    model.articleState.search.query,
    resultIndex,
    pageIndex,
  );
  resultsView.render(model.articleState.search.results);
  paginationView.render(model.articleState.search);
  totalResultsView.render(model.articleState.search);
};
const controlBookmark = function () {
  try {
    if (!model.articleState.article.bookmarkValue) {
      model.createBookmark(model.articleState.article);
    } else {
      model.removeBookmark(model.articleState.article.doi);
    }
    articleView.update(model.articleState.article);
    bookmarkView.render(model.articleState.bookmarks);
  } catch (err) {
    bookmarkView._renderError(this._errorMessage, true);
  }
};
const init = function () {
  articleView.addHandlerRender(controlArticles);
  searchView.addHandlerSearch(controlSearch);
  articleView.addHandlerBookmark(controlBookmark);
  paginationView.addHandlerPagination(controlPagination);
};
init();
