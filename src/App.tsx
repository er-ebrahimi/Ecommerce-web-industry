// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
import {Route, Routes} from "react-router-dom"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from './pages/Home'
import Shop from "./pages/Shop"
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/shop" element={<Shop/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </div>
  )
}

export default App
