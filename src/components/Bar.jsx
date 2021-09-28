import React, { useState } from 'react';

const Bar = ({length, height, color}) => {
    console.log(length)
    return (
        <div style={{ border: `1px solid ${color}`, height: `${height}%`, width: `${length}%`}}>
        </div>
    )
}

export default Bar