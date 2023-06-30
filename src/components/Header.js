import './Header.css'
import {Link} from 'react-router-dom'
import React from 'react'



const Header = () => {
  return (
    <div className='new'>
        <div className="mask">
            <img className='intro-img' src='https://preview.redd.it/sbylndvtiyn31.jpg?auto=webp&s=03e8c3d263c766990d1d389a1651544391202f5e' alt='Img1'/>
        </div>
      <div className='content'>
        <h1 className="container2">
               Hello Myself   
              Aryan Naik 
        </h1>
       
        
        <p className='para'>
          Front-End-Developer
        </p>
        <div>
          <Link to="/" className="btn">Projects</Link>
          <Link to="/" className="btn-light">Contact</Link>
        </div>
        </div>
    </div>
  )
}

export default Header
