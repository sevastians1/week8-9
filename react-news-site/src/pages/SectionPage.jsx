import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ArticleList from "../components/ArticleList";
import axios from "axios";
import APICall from "../api/ArticlesAPI.js";

function SectionPage({ articles }) {
  const { sectionName } = useParams();
  const [sectionArticles, setSectionArticles] = useState([]);

    async function wrapper(){
APICall.fetchArticlesBySection(sectionName, setSectionArticles)

    }

  useEffect( () => {
    wrapper()
  }, [sectionName]);

  return (
    <div>
      {sectionArticles ? (
        <ArticleList articles={sectionArticles} />
      ) : (
        "no articles found"
      )}
    </div>
  );
}

export default SectionPage;
