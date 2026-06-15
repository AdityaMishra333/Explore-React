import React from "react"
import { useState } from "react"
import "./style.css"

function TaskList() {
  const [input, setInput] = useState("")
  const [task, setTask] = useState([])

  return (
    <div className="mainbox">
      <h1>Task List</h1>
      <div>
      <ul>
        <h2>Pending Tasks</h2>
        {
          task.map((item, index) => (
            <li key={index}>{item}
              <button onClick={() => setTask(task.filter((t, i) => i !== index))}>Delete</button>
            </li>
          ))
        }
      </ul>

      <div className="box2">
        <input
          type="text"
          placeholder="enter task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => {
          if (input !== "") {
            setTask([...task, input])
            setInput("")
          }
        }}>Submit</button>
      </div>
    </div>
    </div>
  )
}

export default TaskList