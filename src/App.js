import React, { Component } from 'react'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import News from './views/News';
import ToDo from './views/ToDo';
import Contact from './views/Contact';
import NewContact from './views/NewContact';
import Cart from './views/Cart'
import IndividualPost from './views/IndividualPost';

export default class App extends Component {
  render() {
    return (
      <>
        
          <NavBar />

            <Routes>

              <Route path='/' element={<News/>} />
              <Route path='/todo' element={<ToDo/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/NewContact' element={<NewContact/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/cart/:post_id' element={<IndividualPost/>}/>
              <Route path='/other' element={<h1> other </h1>}/>


            </Routes>
        <Footer/>
        
        
      </>

    )
  }
}

