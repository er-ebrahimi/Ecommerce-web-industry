// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Sginup from "./pages/Signup";
// import Product from "./pages/Product";
import ShopProduct from "./pages/ShoppingPage";
import Profile from "./pages/Profile";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        {/* <Route path="/product" element={<Product />}></Route> */}
        <Route path="/signup" element={<Sginup />}></Route>
        <Route path="/product/:productId" element={<Product />}></Route>
        <Route path="/shopProduct" element={<ShopProduct />}></Route>
        <Route path="/Profile" element={<Profile />}></Route>
        <Route>404 Not found!</Route>
      </Routes>
    </div>
  );
}

export default App;
