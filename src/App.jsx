import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from'./pages/About/About.jsx';
import Fullstack from './pages/Fullstack/Fullstack.jsx';
export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/fullstack-course' element={<Fullstack />} />
        {/* <Route path='/contact' element={<Contact />} /> */}
      </Routes>
    </>
  )
}
