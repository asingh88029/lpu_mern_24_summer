import React from 'react'
import "./PendingTasks.css"
import TaskCard from './TaskCard'

const PendingTasks = ({taskData}) => {
  return (
    <div id='pending-tasks-container'>
        <div>
            <h2>Your Pending Task</h2>
            {/* We will be calling all the pending task card */}
            <div>
              {
                taskData.map((taskInfo)=>{
                  const {task, id, priority, status} = taskInfo
                  return  <TaskCard data={{task: task, priority: priority, status: status, id: id}}/>
                })
              }
            </div>
        </div>
    </div>
  )
}

export default PendingTasks