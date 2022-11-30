function fetchArticlesBySection (){
    let params={
      params: {
        tags: "story",
        hitsPerPage: 50,
        numericFilters: created_at_i<Date.now()

      }}
      console.log(params)
    axios
      .get("http://hn.algolia.com/api/v1/search_by_date?query=", params)
      .then((result) => {
        console.log(result.data.hits);
    ;
      });
  };