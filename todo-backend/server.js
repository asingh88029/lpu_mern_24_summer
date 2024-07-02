const http = require('http');
const url = require("url");
const PORT = 4000;

var data = [
    {
        "title" : "Play Cricket",
        "priority" : "low",
        "id" : 1
    },
    {
        "title" : "Learn React.Js",
        "priority" : "high",
        "id" : 2
    },
    {
        "title" : "Visit UniMall",
        "priority" : "medium",
        "id" : 3
    }
]

const server = http.createServer((request, response)=>{
    
    const parseURL = url.parse(request.url, true)
    const {pathname, query} = parseURL;

    const method = request.method

    if(pathname==="/todos" && method==="GET"){
        response.writeHead(200, {"Content-Type" : "application/json"})
        response.end(JSON.stringify(data))
    }

});

server.listen(PORT, ()=>{
    console.log("Backend Server is started on PORT", PORT)
})