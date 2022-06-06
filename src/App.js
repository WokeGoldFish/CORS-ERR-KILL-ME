import React, { Component, useState } from 'react'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import News from './views/News';
import ToDo from './views/ToDo';
import Contact from './views/Contact';
import NewContact from './views/NewContact';
import ProductPg from './views/ProductPg'
import IndividualPost from './views/IndividualPost';
import Login from './views/Login';
import SignUp from './views/SignUp';
import Cart from './views/Cart';

export default function App () {
  
  const [user, setUser] = useState({})
  
  const[cartItems, setCartItems] = useState([]);
  
  


    return (
      <>
        
          <NavBar user = {user}/>

            <Routes>

              <Route path='/home' element={<News/>} />
              <Route path='/todo' element={<ToDo/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/NewContact' element={<NewContact/>}/>
              <Route path='/ProductPg' element={<ProductPg/>}/>
              <Route path='/product/:post_id' element={<IndividualPost setCartItems = {setCartItems}/>}/>
              <Route path='/login' element={<Login setUser= {setUser}/>}/>
              <Route path='/signup' element={<SignUp/>}/>
              <Route path='/' element={<Login setUser= {setUser}/>}/>
              
              
              <Route path='/cart' element={<Cart cartItems={cartItems}/>}/>

            </Routes>
        <Footer/>
        
        
      </>

    )
  
}

