import React from 'react'
import "./CityCard.css"

const CityCard = ({image, city, description, id}) => {
  return (
    <div className='city-card'>
        <img src={image}/>
        <p>{city}</p>
        <p>{description}</p>
    </div>
  )
}

export default CityCard