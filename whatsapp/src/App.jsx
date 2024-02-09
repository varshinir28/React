//import logo from './logo.svg';
import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import './App.css';
// ./src/App.jsx
import Login from './Components/Login'
import Signup from './Components/Signup'
import Home from './Components/Home'
import Forgot from './Components/Forgot'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/forgot' element={<Forgot/>}/>
      </Routes>
    </div>
  );
}

export default App;
