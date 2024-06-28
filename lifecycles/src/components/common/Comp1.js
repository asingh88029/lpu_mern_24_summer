import React from 'react'
import { useEffect } from 'react'

const Comp1 = () => {

    useEffect(()=>{
        console.log("Comp1 is rendered/mounted")
    },[])


    useEffect(()=>{
        return ()=>{
            console.log("Comp1 is going to unmount")
        }
    },[])

    return (
        <div>Comp1</div>
    )
}

export default Comp1