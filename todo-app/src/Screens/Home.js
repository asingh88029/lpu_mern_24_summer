import React, {useState} from 'react'
import "./Home.css"
import TaskForm from '../Components/Home/TaskForm'
import PendingTasks from '../Components/Home/PendingTasks'
import { reportTypeError } from 'ajv/dist/compile/validate/dataType'

const Home = () => {

  const [taskData, setTaskData] = useState([])

  return (
    <div>
        <TaskForm setTaskData={setTaskData}/>
        <PendingTasks taskData={taskData}/>
    </div>
  )
}

export default Home