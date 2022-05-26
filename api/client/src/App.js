import React from 'react'
import Home from './frontend/pages/home'
import ProductList from './frontend/pages/productList'
import './App.css'
import Product from './frontend/pages/product';
import SignUp from './frontend/pages/signup';
import Login from './frontend/pages/login'
import Cart from './frontend/pages/cart';
import Navbar from './frontend/navbar';
import AllProducts from './frontend/pages/AllProducts';
import Searchpage from './frontend/pages/searchpage';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import PhotoCredits from './frontend/pages/photoCredits';
import SimpleSlider from './frontend/slider';
import { matchPath, useLocation, useParams } from 'react-router-dom';


function App() {
const user = useSelector((state)=> state.user.currentUser)


  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        {/* <Route path="/" element={<Home/>}/> */}
        <Route path="/home" exact element={<Home/>}/>
        <Route path="products/:category" element={<ProductList/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/signup" element={user ? <Navigate to="/"/> : <SignUp/>}/>
        <Route path="/login"  element={user ? <Navigate to="/"/> : <Login/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/photoCredits" element={<PhotoCredits/>}/>
        <Route path="/search/:keyword" element={<Searchpage />}/>
        <Route path="/AllProducts" element={< AllProducts/>}/>
      </Routes>
    </Router>
  );
}

export default App;
