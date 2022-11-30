function Story(props) {
  // render
  const renderStory = () => {
    return <p>{props.text}</p> // implement changes
  }

  return (
    <div id="div-story">
      { renderStory() }
    </div>
  )
}

export default Story
