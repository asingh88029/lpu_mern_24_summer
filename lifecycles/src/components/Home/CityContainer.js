import React, {useEffect, useState} from 'react'
import CityCard from './CityCard'
import "./CityContainer.css"

const CityContainer = () => {

  const [cityData, setCityData] = useState([])

  const [refresh, setRefresh] = useState(false)

  const [test, setTest] = useState(false)

  useEffect(()=>{

    const API_ENDPONT = "https://makemytrip-backend-w2d2.onrender.com/cities"
    
    fetch(API_ENDPONT).then((res)=>res.json()).then((data)=>{
      setCityData(data)
      console.log("API Is Called")
    })

  },[])

  return (
    <div>
      <div>
        <button onClick={()=>{
          setRefresh(prev=>!prev)
        }}>Refresh Cities</button>
         <button onClick={()=>{
          setTest(prev=>!prev)
        }}>Test</button>
      </div>
      <div id='city-container'>
        {cityData.map((info, index)=><CityCard key={index} city={info.city} description={info.description} image={info.image}/>)}
      </div>
    </div>
  )

}

export default CityContainer