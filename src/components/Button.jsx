import React from 'react'
const Button = () => {
  const tasks=["learn react", "eat lanch", "do whatever you want"];
  const randTask=()=>{  const rand = Math.round(Math.random() * 3)
   let myTask = tasks[rand];
    alert(myTask);

  }
  const divStyle={
    backgroundColor: 'lightpink',
    padding: '10px',
}
return (
  <div style={divStyle}>
    <button onClick={randTask}>random a new task</button>
  </div>
  
)
  }
 

export default Button