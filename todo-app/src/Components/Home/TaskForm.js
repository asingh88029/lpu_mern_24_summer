import React, {useState} from 'react'
import "./TaskForm.css"
import {Button, Input, Select} from "antd"

const TaskForm = () => {

    const [task, setTask] = useState("")

    const [priority, setPriority] = useState("high")

    function generateUniqueId(length = 6) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }  

    function addTaskHandler(){
        
        const data = {
            task : task,
            priority : priority,
            status : "pending",
            id : generateUniqueId()
        }

        console.log(data)
        
    }

    return (
    <div id='taskform-container-parent'>
        <div id='taskform-container'>
        {/* Input Box */}
        <Input 
            onChange={(e)=>{
                setTask(e.target.value)
            }} 
            placeholder='Enter Task'
        />

        {/* Select Box */}
        <div>
            <Select
                style={{
                    width : "100%"
                }}
                placeholder="Choose Priority"
                optionFilterProp="label"
                onChange={(value)=>{
                    setPriority(value)
                }}
                options={[
                    {
                        value: 'low',
                        label: 'Low',
                    },
                    {
                        value: 'medium',
                        label: 'Medium',
                    },
                    {
                        value: 'high',
                        label: 'High',
                    },
                ]}
            />
        </div>

        {/* Button */}
        <Button onClick={addTaskHandler} type="primary">ADD TASK</Button>
        </div>
    </div>
    )

}

export default TaskForm