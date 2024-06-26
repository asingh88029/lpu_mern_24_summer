import React, {useState} from 'react'
import "./Home.css"
import TaskForm from '../Components/Home/TaskForm'
import PendingTasks from '../Components/Home/PendingTasks'
import CompletedTasks from '../Components/Home/CompletedTasks'

const Home = () => {

  const [taskData, setTaskData] = useState([])

  return (
    <div>
        <TaskForm setTaskData={setTaskData}/>
        <PendingTasks setTaskData={setTaskData} taskData={taskData}/>
        <CompletedTasks setTaskData={setTaskData} taskData={taskData}/>
    </div>
  )
}

export default Home