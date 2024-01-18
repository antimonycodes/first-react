// import React from 'react'
import profilePicture from './assets/IMG_1166.jpeg'


function Card() {
  return (
  
    <div className="card">
    <img src={profilePicture} alt="profile-image" />
  
    <h1 className='title'>My name is Antimony</h1>
    <p className='text'>Im a Front-End Developer</p>
    </div>
    
  )
}

export default Card