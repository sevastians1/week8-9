import {useParams} from "react-router-dom"
import Article from "../components/Article"
export default function ArticlePage({ getArticle }){
let {articleID} = useParams()
    console.log(getArticle(2))


    return (
        <div>
        {console.log(getArticle(articleID))}
        <Article {...getArticle(articleID)}/>
        ArticlePage on {articleID}   
        </div>
    )
}