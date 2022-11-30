export default Article
function Article(props) {
  
    return (
      <div>
      {console.log(props.article)}
      <h1>{props.article.title}</h1>
    <a href={props.article.url}><h4>{props.article.url}</h4></a>
    <p>Created at: {props.article.created_at}</p>
    <p>Written by: {props.article.author}</p>
    <p>Object ID: {props.article.objectID}</p>
      </div>
    )
  }
  