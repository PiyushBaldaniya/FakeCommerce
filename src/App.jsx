import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Profile from './pages/Profile';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Product from './pages/Products';
import ProductDetail from './pages/ProductDetails';
import Wishlist from './pages/Wishlist';
import Layout from './pages/Layout';
import Login from './pages/Login';
import userContext from "./context/usercontext"
import withAuth from "./components/withAuth"

function App() {
  const user = useContext(userContext);
  const ProtectedCart = withAuth(Cart);
  const ProtectedWishlist = withAuth(Wishlist);
  const ProtectedProfile = withAuth(Profile);

  return (
   <Router>
    <Routes>
      <Route path='/' element={<Layout/>} >
        <Route path='' element={<Product/>} />
        <Route path='/Profile' element={<ProtectedProfile/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Cart' element={<ProtectedCart/>} />
        <Route path='/Checkout' element={<Checkout/>} />
        <Route path='/Product' element={<Product/>} />
        <Route path='/Product/:id' element={<ProductDetail/>} />
        <Route path='/Wishlist' element={<ProtectedWishlist/>} />
      </Route>
      
    </Routes>
   </Router>
  )
}

export default App
