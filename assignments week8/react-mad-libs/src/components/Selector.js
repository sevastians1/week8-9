function Selector(props) {

  const renderChoices = () => {
    return (props.data.map((madLib, index)=>
    <option value={index+1} key={index+1}
    >{index+1}</option>
      
      )
    
    
    ) // implement changes
  }
  function Change(event){
    // console.log("changed", event.target.value)
    props.setSelectedMadLib(props.data[event.target.value -1])
  }

  return (
    <div id="div-selector">
      <span>Select Story: </span>
      <select onChange={Change} >
        { renderChoices() }
      </select>
    </div>
  )
}

export default Selector