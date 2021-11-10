import React, { Component } from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom";
import Home from './views/Home';
import Register from './views/Register';


export default class App extends Component {
  register = (e) => {
    e.preventDefault();
    console.log(e);
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPass = e.target.confirmPass.value;
    console.log(email, password, confirmPass)
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register register={this.register}/>} />
          </Routes>
        </div>

      </div>
    )
  }
}
