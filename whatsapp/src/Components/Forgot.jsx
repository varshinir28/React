import React from 'react'

export default function Forgot() {
  return (
    <div className='wrapper'>
       <form action="">
         <h1>Forgot Password</h1>
         <div className="input-box">
          <input type="password" placeholder='Old Password' required/>
         </div>
         <div className="input-box">
          <input type="password" placeholder='New Password' required/>
         </div>
         <div className="input-box">
          <input type="password" placeholder='Confirm Password' required/>
         </div>
          <button type="submit">Forgot Password</button>
       </form>
    </div>
  )
}
