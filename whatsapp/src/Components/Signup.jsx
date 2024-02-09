import React from 'react'
import '../Components/Styles/Login.css'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div className='wrapper'>
       <form action="">
         <h1>SignUp</h1>
         <div className="input-box">
          <input type="text" placeholder='Name' required/>
         </div>
         <div className="input-box">
          <input type="number" placeholder='Mobile Number' required/>
         </div>
         <div className="input-box">
          <input type="text" placeholder='Username' required/>
         </div>
         <div className="input-box">
          <input type="number" placeholder='DOB' required/>
         </div>
         <div className="input-box">
          <input type="password" placeholder='Password' required/>
         </div>
          <Link to='/'><button type="submit">SignUp</button></Link>

          <div className="register-link"></div>
          <p>Already have an account? <Link to='/'>Login</Link></p>
       </form>
    </div>
  )
}