

function WordForm(props) {
  // render

 function renderInput(event){
    // console.log(event.target.value, event.target.id);
    props.updateMadLibWord(event.target.id, event.target.value)
    return null // implement changes
  }
  
  return (
    <div id="div-words">

      {props.words.map((word, index)=>
      <div key={word.label}>
      <p>{word.label}</p>
      <input id={index} type="text" onChange={renderInput}></input>
      </div>
      )}

    </div>
  )
}

export default WordForm
