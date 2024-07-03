const http = require('http');
const url = require("url");
const PORT = 4000;

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

const server = http.createServer((request, response)=>{
    
    const parseURL = url.parse(request.url, true)
    const {pathname, query} = parseURL;

    const method = request.method

    if(pathname==="/todos" && method==="GET"){

        response.writeHead(200, {"Content-Type" : "application/json"})
        response.end(JSON.stringify(data))

    }else if(pathname==='/todos/new' && method==="POST"){

        let body = ''

        request.on('data', (chunk)=>{
            body+=chunk.toString();
        })

        request.on('end', ()=>{

            const payload = JSON.parse(body)

            const {title, priority} = payload;

            const newTask = {
                title : title,
                priority : priority,
                id : generateUniqueId(),
                status : "pending"
            }

            data.push(newTask)

            response.writeHead(201, {"Content-Type" : "application/json"})
        
            response.end(JSON.stringify({
                success : true,
                id : newTask.id
            }))

        })

    }else if(pathname==='/todos/delete' && method==="DELETE"){

        const {id} = query;

        const taskIndex = data.findIndex(task=>task.id===id)

        data.splice(taskIndex, 1)

        response.writeHead(200, {"Content-Type" : "application/json"})
        response.end(JSON.stringify({
            success : true
        }))

    }else if(pathname==='/todos/update' && method==="PUT"){
        let body = ''

        request.on('data', (chunk)=>{
            body+=chunk.toString();
        })

        request.on('end', ()=>{

            const payload = JSON.parse(body)

            const {id, title, status, priority} = payload;

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

            response.writeHead(200, {"Content-Type" : "application/json"})
            response.end(JSON.stringify({
                success : true
            }))

        })
    }

});

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
    console.log("Backend Server is started on PORT", PORT)
})