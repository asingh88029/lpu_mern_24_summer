const express = require("express");
const PORT = 4000;

const server = express()

server.use(express.json())

var data = [
    {
        "title" : "Play Cricket",
        "priority" : "low",
        "status" : "pending",
        "id" : "vd8hg7"
    },
    {
        "title" : "Learn React.Js",
        "priority" : "high",
        "status" : "pending",
        "id" : "hdy7gd"
    },
    {
        "title" : "Visit UniMall",
        "priority" : "medium",
        "status" : "pending",
        "id" : "63fhg6"
    }
]

server.get("/todos", (request, response)=>{
    response.status(200).json({
        success : true,
        data : data
    })
})

server.post("/todos/new",(request, response)=>{
    const {title, priority} = request.body
    const newTask = {
        title,
        priority,
        id : generateUniqueId(),
        status : "pending"
    }
    data.push(newTask)
    response.status(201).json({
        success : true,
        id : newTask.id
    })
})

server.put("/todos/update", (request, response)=>{

    const {id, title, status, priority} = request.body;

    const taskIndex = data.findIndex(task=>task.id===id)

    const oldTask = data[taskIndex]

    const newTask = {
        ...oldTask,
    }

    if(title){
        newTask.title = title
    }

    if(status){
        newTask.status = status
    }

    if(priority){
        newTask.priority = priority
    }

    data.splice(taskIndex, 1, newTask)

    response.status(200).json({
        success : true
    })
})

server.delete("/todos/delete", (request, response)=>{
    const {id} = request.query;

    const taskIndex = data.findIndex(task=>task.id===id)

    data.splice(taskIndex, 1)

    response.status(200).json({
        success : true
    })

})

function generateUniqueId(length = 6) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

server.listen(PORT, ()=>{
    console.log("Express.Js server is started on PORT : ", PORT)
})