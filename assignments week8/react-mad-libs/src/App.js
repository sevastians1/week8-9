import "./App.css"
import React, { useState } from "react"

// data
import MadLibsData from "./data/MadLibs.js"

// components
import Selector from "./components/Selector.js"
import Story from "./components/Story.js"
import WordForm from "./components/WordForm.js"

function App() {
  // states
  console.log("rerender")
  const [selectedMadLib, setSelectedMadLib] = useState(MadLibsData[0])
  const [showWordOrStory, setWordOrStory] = useState(true)
  // event handlers
  const updateMadLibWord = (wordIndex, wordValue) => {  
    let newSelectedMadLib = { ...selectedMadLib }
  
    newSelectedMadLib.words[wordIndex] = {
      ...newSelectedMadLib.words[wordIndex],
      userWord: wordValue
    }
    // console.log(selectedMadLib.words)
    setSelectedMadLib(newSelectedMadLib)
  }

  
  
  // renders
  return (
    <div className="App">
      <h2>MadLibs!</h2>
      <hr />
      <Selector data={MadLibsData} setSelectedMadLib={setSelectedMadLib} />
      <button onClick={()=>setWordOrStory(!showWordOrStory)}>Click To See Story!</button>
      <hr />
      {showWordOrStory ? 
     <WordForm words={selectedMadLib.words} updateMadLibWord={updateMadLibWord} />
    : 
     <Story text={selectedMadLib.getText()} />}
    </div>
  )
}

export default App
