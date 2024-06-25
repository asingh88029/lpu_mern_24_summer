import React from 'react'
import "./TaskCard.css"
import {Button} from "antd"

const TaskCard = (props) => {
    
  const { data : {task, priority, id, status}} = props  
    
  return (
    <div id='task-card-container' className={status==="pending" ? "pending" : "completed"}>
        <h6>Task : {task}</h6>
        <h6>Priority : {priority}</h6>
        <div>
         {/* <Button onClick={()=>{}} type="primary">Complete</Button> */}
        </div>
    </div>
  )
}

export default TaskCard