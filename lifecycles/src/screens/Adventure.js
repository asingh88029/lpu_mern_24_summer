import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import AdventureCard from '../components/Adventure/AdventureCard'
import "./Adventure.css"

const Adventure = () => {

  const {id} = useParams()

  const [adventureData, setAdventureData] = useState([])

  useEffect(()=>{
    const API_ENDPOINT = `https://makemytrip-backend-w2d2.onrender.com/adventures?city=${id}`
    fetch(API_ENDPOINT).then(res=>res.json()).then((data)=>{
      setAdventureData(data)
    })
  },[])

  return (
    <div id='adventure-card-container'>
      {adventureData.map((info)=>{
        const {id, name, costPerHead, currency, image, duration, category} = info;
        return <AdventureCard id={id} name={name} costPerHead={costPerHead} currency={currency} image={image} duration={duration} category={category} />
      })}
    </div>
  )
}

export default Adventure