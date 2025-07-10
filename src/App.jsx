import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Sdet from'./pages/SDET/Sdet.jsx';
import Fullstack from './pages/Fullstack/Fullstack.jsx';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify"; 

export default function App() {
  return (
    <>
       <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Sdet' element={<Sdet />} />
        <Route path='/fullstack' element={<Fullstack />} />
        {/* <Route path='/contact' element={<Contact />} /> */}
      </Routes>
    </>
  )
}
