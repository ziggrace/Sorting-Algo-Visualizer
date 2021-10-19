import logo from './logo.svg';
import './App.css';
import Bars from './components/Bars.jsx'
import React, { useState } from 'react';

function App() {
  const [numBars, setNumBars] = useState(10)
  const [curBars, setCurBars] = useState(10)

  const updateBars = (e) => {
    e.preventDefault()
    setNumBars(curBars)
    // console.log(curBars)
    //setCurBars(0)
  }

  return (
    <div className="App">
      <form>
        <input value={curBars} onChange={(e)=>setCurBars(e.target.value)} ></input>
        <button disabled={curBars > 150 || curBars <= 2 || isNaN(+curBars)} onClick={e => {if(curBars <= 200 && curBars >0) updateBars(e)}}>Update Number of Bars (Max 150)</button>
      </form>
      {/* <button onClick={updateBars}>Change Number of Bars</button> */}
      <Bars numBars={numBars}/>
    </div>
  );
}

export default App;
