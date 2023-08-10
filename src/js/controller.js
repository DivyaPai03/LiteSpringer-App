import * as model from "./model.js";
import articleView from "./views/articleView.js";
import searchView from "./views/searchView.js";
import resultsView from "./views/resultsView.js";
import paginationView from "./views/paginationView.js";
if (module.hot) {
  module.hot.accept();
}
const controlArticles = async function () {
  try {
    const doi_first_part = window.location.hash.slice(1, 8);
    if (!doi_first_part) return;
    const doi_second_part = window.location.hash.slice(9);
    articleView.renderLoader();
    await model.loadArticle(doi_first_part, doi_second_part);
    articleView.render(model.articleState.article);
  } catch (err) {
    articleView._renderError();
  }
};
const controlSearch = async function () {
  try {
    const query = searchView.getQuery();
    if (!query) return;

    resultsView.renderLoader();
    await model.loadSearchResults(query);
    // resultsView.render(model.getPage(4));
    resultsView.render(model.articleState.search.results);
    paginationView.render(model.articleState.search);
  } catch (err) {}
};
const controlPagination = async function (resultIndex, pageIndex) {
  resultsView.renderLoader();
  await model.loadSearchResults(
    model.articleState.search.query,
    resultIndex,
    pageIndex,
  );
  resultsView.render(model.articleState.search.results);
  paginationView.render(model.articleState.search);
};
const init = function () {
  articleView.addHandlerRender(controlArticles);
  searchView.addHandlerSearch(controlSearch);
  paginationView.addHandlerPagination(controlPagination);
};
init();
