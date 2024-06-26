import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import LandingScreen from "./screens/LandingScreen"
import Adventure from "./screens/Adventure"
import Details from "./screens/Details"
import Reservation from "./screens/Reservation"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingScreen/>}/>
        <Route path='/adventure' element={<Adventure/>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='/reservation' element={<Reservation/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;


