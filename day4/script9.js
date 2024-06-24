const lines = [
    "MG is from Gujrat",
    "He is known as Father of Nation",
    "He born in 1869"
]

const result = lines.reduce((acc, curr)=>{
    const nextAcc = acc + curr + ". "
    return nextAcc
}, "")

console.log(result)