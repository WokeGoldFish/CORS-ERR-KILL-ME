import React, { Component } from 'react'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';



export default class App extends Component {
  render() {
    return (
      <>
        
          <NavBar />

            <Routes>

              <Route path='/' element={<Home/>} />
              <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/other' element={<h1> other </h1>}/>


            </Routes>
        <Footer/>
        
        
      </>

    )
  }
}

