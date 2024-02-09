import React from 'react'
import '../Styles/Search.css'

export default function Search() {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type="text" placeholder='Find a User'/>
      </div>
      <div className='userChat'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9PE9jrONm0Am0KDLehI24aQmLDKugTby7pw&s" alt=""/>
        <div className='userChatInfo'>
          <span>Swetha</span>
        </div>
      </div>
    </div>
  )
}