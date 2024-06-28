import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to="/"><span>Home</span></Link> 
        <Link to="/adventure"><span>Adventure</span></Link>
        <Link to="/details"><span>Details</span></Link>
        <Link to="/reservation"><span>Reservation</span></Link>   
    </div>
  )
}

export default Navbar