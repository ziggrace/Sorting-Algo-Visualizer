import React, { useState } from 'react';

const Bar = ({length, height, id, color}) => {
    // const [color, setColor] = useState("blue")

    // // console.log(length)
    // const myColor = () => {
    //     setColor("red" ? color === "blue" : "blue")
    // }

    return (
        <div style={{ border: `1px solid ${color}`, height: `${height}%`, width: `${length}%`, id: {id}}}>
        </div>
    )
}

export default Bar