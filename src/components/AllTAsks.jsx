import React from 'react'

const AllTAsks = () => {
    const tasks=["learn react", "eat lanch", "do whatever you want"]
    return (
        <div style={{ backgroundColor: 'red' }}>
          <h2>Your tasks are:</h2>
          <ul>
            <li>
              <input type="checkbox" />
             {tasks[0]}
            </li>
            <li>
              <input type="checkbox" />
              {tasks[1]}
            </li>
            <li>
              <input type="checkbox" />
              {tasks[2]}
            </li>
          </ul>
        </div>
      );
    };

export default AllTAsks