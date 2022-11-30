import axios from "axios";
const fetchArticleByID = (articleID) => {
  console.log("articleID: ");
  return articleID;
};

const fetchArticlesBySection = (section, anotherFunction) => {
  let converter = convertSection(section);
  console.log(converter);
  let tags = converter[0];
  let url = converter[1];
  let params={
    params: {
      tags: `${tags}`,
      hitsPerPage: 50,
    }}
  if (converter[2]){params.params.numericFilters=converter[2] }
  axios
    .get(url, params)
    .then((result) => {
      console.log(result.data.hits);
      anotherFunction(result.data.hits);
    });
};

const fetchArticles = (filters = null) => {};

function mapThemAll(articleList) {
  let result = articleList.map((article, index) => {
    return {
      id: index,
      title: article.title,
      abstract: article.abstract,
      byline: article.byline,
      created_date: article.created_date,
      url: article.url,
      section: article.section,
      tags: article._tags,
    };
  });
  return result;
}


function convertSection(section) {
  if (section === "new") {
    return ["story", "http://hn.algolia.com/api/v1/search_by_date?"];
  } else if (section === "ask") {
    return ["ask_hn", "http://hn.algolia.com/api/v1/search_by_date?"];
  } else if (section === "show") {
    return ["show_hn", "http://hn.algolia.com/api/v1/search_by_date?"];
  } else if (section === "past") {
    return ["story", `http://hn.algolia.com/api/v1/search_by_date?tags=story&numericFilters=created_at_i<${Date.now}` ]}
}
export default {
  fetchArticleByID,
  fetchArticles,
  fetchArticlesBySection,
};
