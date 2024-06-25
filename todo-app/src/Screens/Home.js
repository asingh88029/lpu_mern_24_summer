import React from 'react'
import "./Home.css"
import TaskForm from '../Components/Home/TaskForm'
import PendingTasks from '../Components/Home/PendingTasks'

const Home = () => {
  return (
    <div>
        <TaskForm/>
        <PendingTasks/>
    </div>
  )
}

export default Home