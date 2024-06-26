import React from 'react'
import "./TaskCard.css"
import {Button} from "antd"

const TaskCard = (props) => {
    
  const { data : {task, priority, id, status}, setTaskData} = props  

  const completeHandler = ()=>{
    setTaskData((prevValue)=>{
      const newTaskData = [...prevValue]
      return  newTaskData.map((taskInfo)=>{
          if(taskInfo.id===id){
            const newTaskInfo = {...taskInfo}
            newTaskInfo.status= "completed"
            return newTaskInfo
          }else{
            return taskInfo
          }
        })
    })
  }

  const pendingHandler = ()=>{
    setTaskData((prevValue)=>{
      const newTaskData = [...prevValue]
      return  newTaskData.map((taskInfo)=>{
          if(taskInfo.id===id){
            const newTaskInfo = {...taskInfo}
            newTaskInfo.status= "pending"
            return newTaskInfo
          }else{
            return taskInfo
          }
        })
    })
  }

  const removeHandler = ()=>{
    setTaskData((prevValue)=>{
      const newTaskData = [...prevValue]
      return newTaskData.filter((taskInfo)=>{
        return taskInfo.id!==id
      })
    })
  }
    
  return (
    <div className={status==="pending" ? "pending" : "completed"}>
      <p>Task : {task}</p>
      <p>Priority : {priority}</p>
      {status==="pending" ? <button onClick={completeHandler} >Complete</button> : <button onClick={pendingHandler} >Pending</button>}
      <button onClick={removeHandler}>Remove</button>
    </div>
  )
}

export default TaskCard