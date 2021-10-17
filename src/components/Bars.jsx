import React, { useEffect, useState } from "react";
import Bar from "./Bar.jsx";

const Bars = ({ numBars }) => {
  const [bars, setBars] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [timeMult, setTimeMult] = useState(1)

  useEffect(() => {
    setBars(createBars(numBars));
  }, [numBars]);

  const createBars = (numBars) => {
    const newBars = [];
    for (let val = 0; val < numBars; val++) {
      newBars.push(
        {
          length: 100 / numBars,
          height: 10 + Math.random() * 90,
          id:val,
          color:"red"
        }
      );
    }
    return newBars;
  };


//   const updateColor = () =>{

//   }

//   const memoizedHandleClick = useCallback(
//     () => {
//         console.log("updating")
//         setColor("purple")
//     },
//     [], // Tells React to memoize regardless of arguments.
//   )

  const shuffle = () => {
    const copy = [...bars];
    let time = 0
    for (let i = bars.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[randomIndex]] = [copy[randomIndex], copy[i]];
      time ++
      visualSwap(copy, i, randomIndex, time);
    }
    visualSwap(copy, 0, 1, time)
    //console.log(bars)
  };

  const visualSwap = (cur, j2, j1, time) => {
    const arr = [...cur];
    // arr[j1] = <Bar length={arr[j1].props.length} height={arr[j1].props.height} id={arr[j1].props.id} color="blue"/>
    // arr[j2] = <Bar length={arr[j2].props.length} height={arr[j2].props.height} id={arr[j2].props.id} color="blue"/>;
    // Object.assign(arr[j1], {color: "blue"})
    // Object.assign(arr[j2], {color: "blue"})
    [arr[j2], arr[j1]] = [arr[j1], arr[j2]];
    setTimeout(() => {
      [arr[j2], arr[j1]] = [arr[j1], arr[j2]];
      console.log(arr)
      console.log(arr[j1], arr[j2])
      Object.assign(arr[j1], {color: "blue"})
      Object.assign(arr[j2], {color: "blue"})
      setBars(arr);
    }, time * 100);
    setTimeout(() =>{
      const newArr = [...arr]
      console.log(j1, j2)
      // arr[j1] = <Bar length={arr[j1].props.length} height={arr[j1].props.height} id={arr[j1].props.id} color="red"/>
      Object.assign(newArr[j1], {color: "red"})
      // arr[j2] = <Bar length={arr[j2].props.length} height={arr[j2].props.height} id={arr[j2].props.id} color="red"/>;
      Object.assign(newArr[j2], {color: "red"})
      //console.log("bars", bars[j1], bars[j2])
      console.log(newArr)
      setBars(newArr)
    }, (time + 1) * 100)
  }
  ;

  // An optimized version of Bubble Sort
  function bubbleSort() {
    const arr = [...bars];
    const n = arr.length;
    var i, j;
    let timeMultiplier = 0;
    setSorting(true);
    for (i = 0; i < n - 1; i++) {
      for (j = 0; j < n - i - 1; j++) {
        if (arr[j].height > arr[j + 1].height) {
          [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
          //console.log(j+1, j)
          timeMultiplier++;
          console.log("from swap", j+1, j)
          visualSwap(arr, j + 1, j, timeMultiplier);
          //[arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        }
      }
    }
    //visualSwap(arr, 0, 1, timeMultiplier)
    setTimeout(() => setSorting(false), timeMultiplier * 100);
  }

  const visualMerge = () => {
    let time = 1
    return (arr, l, r) => {
      console.log(time)
      setTimeout(()=>{
      //console.log("viz", arr)
      // const copy = [...bars]
      // for (let i = l; i<=r; i++){
      //   copy[i] = arr[i-l]
      // }
      for (let i = l; i <= r; i++){
          arr[i].color = "blue"
      }
      //if (l === 0 && r === bars.length - 1) time = 1
      setBars(arr)
    }, time * 1000)
    setTimeout(()=>{
      //console.log("viz", arr)
      // const copy = [...bars]
      // for (let i = l; i<=r; i++){
      //   copy[i] = arr[i-l]
      // }
      for (let i = l; i <= r; i++){
          arr[i].color = "red"
      }
      if (l === 0 && r === bars.length - 1) time = 1
      setBars(arr)
    }, (time + 1) * 1000)
    time ++
  }
  }

  const finalVisMerger = visualMerge()


  function merge(arr, l, m, r, time) {
    // console.log(arr)
    // console.log(l, m, r)
    var n1 = m - l + 1;
    var n2 = r - m;

    // Create temp arrays
    var L = new Array(n1);
    var R = new Array(n2);

    // Copy data to temp arrays L[] and R[]
    for (var i = 0; i < n1; i++) L[i] = arr[l + i];
    for (var j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

    // Merge the temp arrays back into arr[l..r]

    // Initial index of first subarray
    var i = 0;

    // Initial index of second subarray
    var j = 0;

    // Initial index of merged subarray
    var k = l;

    while (i < n1 && j < n2) {
      if (L[i].height <= R[j].height) {
        arr[k] = L[i];
        i++;
      } else {
        arr[k] = R[j];
        j++;
      }
      k++;
    }

    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
      arr[k] = L[i];
      i++;
      k++;
    }

    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
      arr[k] = R[j];
      j++;
      k++;
    }

    const copy = [...arr]

    finalVisMerger(copy, l, r)
    console.log("incrementing")
  }

  // l is for left index and r is
  // right index of the sub-array
  // of arr to be sorted */
  function mergeSort(arr, l, r, time=1) {
    //const arr = [...bars]
    if (l >= r) {
      return; //returns recursively
    }
    var m = l + parseInt((r - l) / 2);
    time ++
    mergeSort(arr, l, m, time);
    time++
    mergeSort(arr, m + 1, r, time);
    merge(arr, l, m, r, time);
    //setTimeMult(timeMult + 1)
    //setTimeMult(1);
  }

  // console.log(bars)
  // console.log(numBars)
  return (
    //const bars = []
    <div className="barsContainer">
      <button onClick={shuffle} disabled={sorting}>
        Shuffle
      </button>
      <button onClick={bubbleSort}>Bubble Sort</button>
      <button onClick={() => {
        mergeSort([...bars], 0, bars.length - 1)
        setTimeMult(1)
        }}>
        Merge Sort
      </button>
      <div className="bars">
        {bars.map(bar=><Bar length={bar.length} height={bar.height} color={bar.color} id={bar.id}/>)}
      </div>
    </div>
  );
};

export default Bars;
