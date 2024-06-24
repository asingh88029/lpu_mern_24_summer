console.log("start")

const result = nonBlocking()

result.then((data)=>{
    console.log(data)
})

function nonBlocking(){
    return new Promise((resolve, reject)=>{

        const data = {
            name : "Ankit",
            age : 26
        }

        setTimeout(()=>{
            resolve(data)
        }, 5000)

    })
}

console.log("end")