// import React from 'react'
import '../Components/Styles/Login.css'
import { FaUser,FaLock } from "react-icons/fa";
import{Link} from 'react-router-dom'

// export const Login = () => {
//   return (
//     <div className='wrapper'>
//        <form action="">
//          <h1>Login</h1>
//          <div className="input-box">
//           <input type="text" placeholder='Username' required/>
//           <FaUser className='icon'/>
//          </div>
//          <div className="input-box">
//           <input type="password" placeholder='Password' required/>
//           <FaLock className='icon'/>
//          </div>
//           <div className="remember-forgot">
//           <label><input type="checkbox"/>Remember me</label>
//           <br/>
//           <a href='#'>Forgot Password?</a>
//           </div>
//           <button type="submit">Login</button>

//           <div className="register-link"></div>
//           <p>Do not have an account? <a href="#">Register</a></p>
//        </form>
//     </div>
//   )
// }
import React from 'react'


export default function Login() {
  return (
    <div className='wrapper'>
        <form action="center">
          <h3>Login</h3>
          <div className="input-box">
           <input type="text" placeholder='Username' required/>
           <FaUser className='icon'/>
          </div>
          <div className="input-box">
           <input type="password" placeholder='Password' required/>
           <FaLock className='icon'/>
          </div>
           <div className="remember-forgot">
           <label><input type="checkbox"/>Remember me</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <Link to='/forgot'>Forgot Password?</Link>
           </div>
           <br/>
           <Link to='/home'><button type="submit">Login</button></Link>
            
           <div className="register-link"></div>
           <p>Do not have an account? <Link to='/signup'>Signup</Link></p>
        </form>
     </div>
  )
}
