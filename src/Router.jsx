import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';

const Router = () => {
  return (
    <Routes>
        <Route to='/' element ={<Navbar />}/>
    </Routes>
    
  )
}

export default Router
