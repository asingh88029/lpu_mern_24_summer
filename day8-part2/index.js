function a (){
    if(true){
        let count = 0
    }

    // count = 8

    return ()=>{
        console.log(count)
    }
}

const x = a()
x()

