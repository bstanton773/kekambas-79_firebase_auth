import React, { Component } from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom";
import Home from './views/Home';


export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>

      </div>
    )
  }
}
