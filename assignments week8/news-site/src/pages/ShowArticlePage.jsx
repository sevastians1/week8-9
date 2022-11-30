import ArticleTeaser from "../components/ArticleTeaser"

export default function ShowArticlePage({articles}){



    return (
        <div>
         {articles.map( article =>{
      return <ArticleTeaser key={article.article.id} article={article.article} />
     })}   
        </div>
    )
}