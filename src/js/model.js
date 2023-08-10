import {
  getJSON,
  generateCreatorList,
  getFirstSentenceAbstract,
} from "./helper.js";
import { API_KEY, API_URL, RESULTS_PER_PAGE } from "./config.js";
export const articleState = {
  search: {
    query: "",
    results: [],
    resultIndex: 1,
    pageIndex: 1,
    resultsPerPage: RESULTS_PER_PAGE,
    totalResults: 0,
  },
  article: {},
};
// QUERY: https://api.springernature.com/meta/v2/json?api_key=18607f9883f1efb024db42c270381ece&q=plasma&s=1&p=10
// DOI:  https://api.springernature.com/meta/v2/json?api_key=18607f9883f1efb024db42c270381ece&q=10.1007%2FBF00627098&s=1&p=10

// const createArticleObject= function(data){

// }

export const loadArticle = async function (doi_first_part, doi_second_part) {
  try {
    // const url = `${API_URL}api_key=${API_KEY}&q=doi%3A${doi_first_part}%2F${doi_second_part}&s=1&p=${RESULTS_PER_PAGE}`;
    const url = `${API_URL}api_key=${API_KEY}&q=${doi_first_part}%2F${doi_second_part}&s=1&p=${RESULTS_PER_PAGE}`;
    const data = await getJSON(url);
    console.log("loadArticle data", data);
    const records = data.records[0];

    articleState.article = {
      publicationType: records.publicationType,
      title: records.title,
      creators: generateCreatorList(records),
      publicationName: records.publicationName,
      publicationYear: records.publicationDate.slice(0, 4),
      doi: records.doi,
      abstract: records.abstract,
      openAccess: records.openaccess,
    };
  } catch (err) {
    throw err;
  }
};

export const loadSearchResults = async function (
  q = articleState.search.query,
  s = articleState.search.resultIndex,
  p = articleState.search.pageIndex,
) {
  try {
    const url = `${API_URL}api_key=${API_KEY}&q=${q}&s=${s}&p=${RESULTS_PER_PAGE}`;
    const data = await getJSON(url);
    // console.log("loadSearchResults data", data);
    articleState.search.query = q;
    articleState.search.resultIndex = s;
    articleState.search.pageIndex = p;
    articleState.search.results = data.records.map((res, i) => {
      return {
        title: res.title,
        publicationName: res.publicationName,
        publicationYear: res.publicationDate.slice(0, 4),
        doi: res.doi,
        abstract: getFirstSentenceAbstract(res),
        creator: generateCreatorList(res),
      };
    });
    articleState.search.totalResults = data.result[0].total;
  } catch (err) {
    throw err;
  }
};
export const getPage = function (page = articleState.search.page) {
  articleState.search.page = page;
  const start = page - 1 * articleState.search.resultsPerPage;
  const end = page * articleState.search.resultsPerPage;
  return articleState.search.results.slice(start, end);
};
