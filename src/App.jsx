import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Menupage from './Pages/Menupage'
import Offerspage from './Pages/Offerspage'
import Contactpage from './Pages/Contactpage'
import Aboutpage from './Pages/Aboutpage'
import Cartpage from './Pages/Cartpage'
import Checkoutpage from './Pages/Checkoutpage'
import Checkedpage from './Pages/Checkedpage'
function App() {

  return (
    <Router> 
      <Routes> 
        <Route path='/' element={<Homepage />} /> 
        <Route path='/menu' element={<Menupage />} />
        <Route path='offers' element={<Offerspage />}/>
        <Route path='/contact' element={<Contactpage />} />
        <Route path='/about' element={<Aboutpage />} />
        <Route path='/cart' element={<Cartpage />} />
        <Route path='/checkout' element={<Checkoutpage />}/>
        <Route path='/checked' element={<Checkedpage />}/>
      </Routes>
    </Router>
  )
}

export default App
