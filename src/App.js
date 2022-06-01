import React, { Component } from 'react'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import ToDo from './views/ToDo';
import Contact from './views/Contact';
import NewContact from './views/NewContact';


export default class App extends Component {
  render() {
    return (
      <>
        
          <NavBar />

            <Routes>

              <Route path='/' element={<Home/>} />
              <Route path='/todo' element={<ToDo/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/NewContact' element={<NewContact/>}/>
              <Route path='/other' element={<h1> other </h1>}/>


            </Routes>
        <Footer/>
        
        
      </>

    )
  }
}

