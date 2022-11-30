import { useState, createContext } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import AppNav from "./components/AppNav";
import newsData from "./data/news.json";
import headerData from "./data/sections.json";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";
import AskArticlePage from "./pages/AskArticlePage";
import ShowArticlePage from "./pages/ShowArticlePage";
import SearchArticlePage from "./pages/SearchPage";

function App() {
  const [searchPageData, updateSearchPage] = useState([]);
  const [allArticle, setAllArticles] = useState(
    newsData.map((article, index) => {
      article.id = index + 1;
      return {
        article,
      };
    })
  );

  function getArticle(articleID) {
    return allArticle[+articleID - 1];
  }

  function returnAllTags(section_tag) {
    let filteredList = allArticle.filter((article) => {
      for (let tag of article.article._tags) {
        if (section_tag === tag) {
          return true;
        }
      }
    });
    return filteredList;
  }

  return (
    <div>
      <AppNav headerData={headerData} articleData={allArticle} updateSearch={updateSearchPage}/>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                articles={allArticle}

              />
            }
          />
          <Route
            path="/article/:articleID"
            element={<ArticlePage getArticle={getArticle} />}
          />
          <Route
            path="/ask"
            element={<AskArticlePage articles={returnAllTags("ask_hn")} />}
          />
          <Route
            path="/show"
            element={<ShowArticlePage articles={returnAllTags("show_hn")} />}
          />
          <Route
            path="/search"
            element={<SearchArticlePage articles={searchPageData} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
