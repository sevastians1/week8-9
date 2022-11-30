
import ArticleList from '../components/ArticleList'

export default function HomePage({articles}){



    return (
        <div>
        <ArticleList article={articles}/> 
        </div>
    )
}