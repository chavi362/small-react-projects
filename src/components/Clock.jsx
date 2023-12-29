import React from 'react'
const Clock = (props) => {
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
    return (
        <div style={divStyle}>
            <span>this is the time now</span>
            <p style={timeStyle}> {props.time}</p>
        </div>
    )
}
export default Clock