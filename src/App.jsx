import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import About from'./pages/About/About.jsx';
export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        {/* <Route path='/contact' element={<Contact />} /> */}
      </Routes>
    </>
  )
}
