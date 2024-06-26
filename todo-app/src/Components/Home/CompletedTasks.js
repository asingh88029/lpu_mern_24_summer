import React from 'react'
import "./CompletedTasks.css"
import TaskCard from './TaskCard'

const CompletedTasks = ({taskData, setTaskData}) => {
  return (
    <div id='pending-tasks-container'>
        <div>
            <h2>Your Completed Task</h2>
            {/* We will be calling all the completed task card */}
            <div>
              {
                taskData.filter((taskInfo)=>taskInfo.status=="completed").map((taskInfo)=>{
                  const {task, id, priority, status} = taskInfo
                  return  <TaskCard setTaskData={setTaskData} data={{task: task, priority: priority, status: status, id: id}}/>
                })
              }
            </div>
        </div>
    </div>
  )
}

export default CompletedTasks