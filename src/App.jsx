import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from './pages/Profile';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Product from './pages/Products';
import ProductDetail from './pages/ProductDetails';
import Wishlist from './pages/Wishlist';
import Layout from './pages/Layout';

function App() {

  return (
   <Router>
    <Routes>
      <Route path='/' element={<Layout/>} >
        <Route path='' element={<Home/>} />
        <Route path='/Profile' element={<Profile/>} />
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/Checkout' element={<Checkout/>} />
        <Route path='/Product' element={<Product/>} />
        <Route path='/Product/:id' element={<ProductDetail/>} />
        <Route path='/Wishlist' element={<Wishlist/>} />
      </Route>
      
    </Routes>
   </Router>
  )
}

export default App
