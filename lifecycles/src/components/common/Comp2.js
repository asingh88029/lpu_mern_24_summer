import React from 'react'
import { useState, useEffect } from 'react'

const Comp2 = () => {
    
    const [count, setCount] = useState(0)

    useEffect(()=>{
        console.log("Comp2 is Rerendered")
    },[count])

    return (
        <div>
            <p>{count}</p>
            <button onClick={()=>{ setCount(prev=>prev+1) }}>ADD</button>
        </div>
    )
}

export default Comp2