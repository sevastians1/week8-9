export default ArticleTeaser
import {Link} from "react-router-dom"
function ArticleTeaser({article}) {

    return (
      <div className="articleTeaser">
      <div >
      <Link to={`/article/${article.id}`}>
        <h2> {article.title}</h2>
        </Link>
        <p>{article.created_at}</p>
        </div>

      </div>
    )
  }
  