import React, { useState } from 'react'


const Clock = () => {
    const timeStyle = {
        height: "300px",
        width: "20px",
        position: "absolute",
        color: "white",
        fontSize :"35px",
    }
    const divStyle={
        backgroundColor: 'lightgreen',
    }
    const updateClock = () => {
        return new Date().toLocaleTimeString()
    }

    const [time, setTime] = useState(updateClock());
    setInterval(() => {
        setTime(updateClock());
    }, 1000)
    return (
        <div style={divStyle}>
            <span>this is the time now</span>
            <p style={timeStyle}> {time}</p>
        </div>
    )
}
export default Clock