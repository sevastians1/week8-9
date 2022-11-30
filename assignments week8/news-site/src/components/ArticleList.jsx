import ArticleTeaser from "./ArticleTeaser"


export default function ArticleList({article}){



    return (
        <div>
         {article.map( article =>{
      return <ArticleTeaser key={article.article.id} article={article.article} />
     })}   
        </div>
    )
}