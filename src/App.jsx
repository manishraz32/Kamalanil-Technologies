import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Sdet from'./pages/SDET/Sdet.jsx';
import Fullstack from './pages/Fullstack/Fullstack.jsx';
export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Sdet' element={<Sdet />} />
        <Route path='/fullstack' element={<Fullstack />} />
        {/* <Route path='/contact' element={<Contact />} /> */}
      </Routes>
    </>
  )
}
