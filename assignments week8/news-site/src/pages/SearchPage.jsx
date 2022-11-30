import ArticleTeaser from "../components/ArticleTeaser"

export default function SearchArticlePage({articles}){


    return (
        <div>
         {articles.map( article =>{
      return <ArticleTeaser key={article.article.title} article={article.article} />
     })}   
        </div>
    )
}