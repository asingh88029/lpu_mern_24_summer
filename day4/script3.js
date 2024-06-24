// const a = function(){
//     console.log("I am a")
// }

// const b = function(func){
//     func()
// }

// b(a)

const d = ()=>{
    return ()=>{
        console.log("hello")
    }
}

const temp = d()
console.log(temp)
temp()