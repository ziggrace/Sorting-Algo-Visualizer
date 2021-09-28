import React, { useEffect, useState, componentDidMount } from "react";
import Bar from "./Bar.jsx";

const Bars = ({ numBars }) => {
  const [bars, setBars] = useState([]);
  const [sorting, setSorting] = useState(false)

  //let timer1 = setTimeout(() => setShowLoading(true), 1000)

//   useEffect(
//     () => {
//       return () => {
//         clearTimeout(timer1)
//       }
//     },
//     [sorting]
//   )

  const createBars = (numBars) => {
    //console.log(numBars);
    const newBars = [];
    for (let val = 0; val < numBars; val++) {
      newBars.push(
        <Bar
          length={100 / numBars}
          height={10 + Math.random() * 90}
          color="blue"
        />
      );
    }
    //console.log(newBars);
    return newBars;
  };

  const shuffle = () => {
    const copy = [...bars];
    for (let i = bars.length - 1; i > 0; i--) {
      //console.log("len", copy[i].props.height);
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[randomIndex]] = [copy[randomIndex], copy[i]];
    }
    setBars(copy);
  };

//   function swap(arr, i, j, n){
//     // console.log("yo");
//     // [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
//     // setBars(arr)
//     // setTimeout(()=>{}, 1000)
//     if (i < n - 1)
//     return
//   }

  const changeColor = (cur, j2, j1, time) => {
    const arr = [...cur];
    [arr[j2], arr[j1]] = [arr[j1], arr[j2]];
    console.log(j2, j1)
    console.log(arr.map((val)=>val.props.height))
    setTimeout(()=>{
        // console.log("new")
        // console.log(j2, j1)
        // arr.forEach(obj=>console.log(obj.props.height));
        setBars(arr)
    }, time * 100)
  }
  // An optimized version of Bubble Sort
  function bubbleSort() {
    const arr = [...bars]
    const n = arr.length
    var i, j;
    let timeMultiplier = 0
    setSorting(true)
    for (i = 0; i < n - 1; i++) {
      for (j = 0; j < n - i - 1; j++) {
        if (arr[j].props.height > arr[j + 1].props.height) {
            changeColor(arr, j + 1, j, timeMultiplier);
            [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
            //console.log(j+1, j)
            timeMultiplier ++
        }
      }
    }
    setTimeout(()=>setSorting(false), timeMultiplier * 100)
  }

  useEffect(() => {
    setBars(createBars(numBars));
  }, [numBars]);

  // console.log(bars)
  // console.log(numBars)
  return (
    //const bars = []
    <div className="barsContainer">
      <button onClick={shuffle} disabled={sorting}>Shuffle</button>
      <button onClick={bubbleSort}>Bubble Sort</button>
      <div className="bars">{bars}</div>
    </div>
  );
};

export default Bars;
