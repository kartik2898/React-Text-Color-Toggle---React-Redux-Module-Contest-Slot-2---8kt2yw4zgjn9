import React, {useEffect, useState} from 'react'
import '../styles/App.css';

const App = () => {
  const [color, setColor] = useState(true)
  function toggle() {
    setColor(!color)
  }
  //code here
  return (
    <div id="main">
      <p className={`${color ? 'redColor' : 'blueColor'}`}>Newton School</p>
      <button id="button" onClick={toggle}>
        Change Style
      </button>
    </div>
  )
}
export default App;
