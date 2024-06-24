console.log("start") 

setTimeout(()=>{
    console.log("setTimeout callback is called")
}, 2000)

fetch("https://makemytrip-backend-w2d2.onrender.com/cities").then((res)=>{
    console.log("fetch cb is called")
})

document.getElementById("btn").addEventListener("click", ()=>{
    console.log("Button is clicked")
})

console.log("end")