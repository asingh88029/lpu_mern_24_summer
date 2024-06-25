import React from 'react'
import "./PendingTasks.css"
import TaskCard from './TaskCard'

const PendingTasks = () => {
  return (
    <div id='pending-tasks-container'>
        <div>
            <h2>Your Pending Task</h2>
            {/* We will be calling all the pending task card */}
            <div id='task-card-parent'>
                <TaskCard data={{task: 'Play Cricket', priority: 'low', status: 'pending', id: 'HHxech'}}/>
                <TaskCard data={{task: 'React Practice', priority: 'high', status: 'completed', id: 'HHuecf'}}/>

            </div>
        </div>
    </div>
  )
}

export default PendingTasks