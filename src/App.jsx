import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Menupage from './Pages/Menupage'
import Offerspage from './Pages/Offerspage'
import Contactpage from './Pages/Contactpage'
import Aboutpage from './Pages/Aboutpage'
function App() {

  return (
    <Router basename='/karam-elsham'> 
      <Routes> 
        <Route path='/' element={<Homepage />} /> 
        <Route path='/menu' element={<Menupage />} />
        <Route path='offers' element={<Offerspage />}/>
        <Route path='/contact' element={<Contactpage />} />
        <Route path='/about' element={<Aboutpage />} />
      </Routes>
    </Router>
  )
}

export default App
