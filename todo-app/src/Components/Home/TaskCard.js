import React from 'react'
import "./TaskCard.css"
import {Button} from "antd"

const TaskCard = (props) => {
    
  const { data : {task, priority, id, status}} = props  
    
  return (
    <div className={status==="pending" ? "pending" : "completed"}>
      <p>Task : {task}</p>
      <p>Priority : {priority}</p>
      <button>Complete</button>
      <button>Remove</button>
    </div>
  )
}

export default TaskCard