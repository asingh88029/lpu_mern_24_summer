import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar(){
    return(
        <div id='navbar-container'>
            <div><span>Trip Karo</span></div>
            <div>
                <Link to={"/"}><span>Home</span></Link>
                <Link to={"/reservation"}><span>Reservation</span></Link>
            </div>
        </div>
    )
}

export default Navbar