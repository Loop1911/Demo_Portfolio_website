import React from 'react'
import './Footer.css'
import { FaHome, FaPhone, FaMailBulk, FaInstagram, FaDiscord, FaLinkedin, FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaHome size={35} style={{ color: "black", marginRight: "2rem" }} />
            <div>
              <p style={{color:'black'}}>Suncity Road</p>
              <p style={{color:'black'}}>411051</p>
              <p style={{color:'black'}}>Pune,Maharashtra,India </p>
            </div>

          </div>
          <div className='phone'>
            <h4 style={{color:'black'}}><FaPhone size={35} style={{ color: "black", marginRight: "1.5rem" }} /> 9158000622</h4>


          </div>
          <div className='email'>
            <h4 style={{color:'black'}} ><FaMailBulk size={35} style={{ color: "black", marginRight: "1.5rem" }} />Naikaryan2002@gmail.com</h4>

          </div>
        </div>
        <div className='right'>
          <h4 style={{color:'black'}}>About Me </h4>
          <p style={{color:'black'}}>Lorem25 </p>

          <div className='social'>
            <Link to="https://www.instagram.com">
              <FaInstagram size={35} style={{ color: "black", marginRight: "1rem" }} />
            </Link>

            <Link to="https://www.discord.com">
              <FaDiscord size={35} style={{ color: "black", marginRight: "1rem" }} />
            
            </Link>

            <Link to="https://www.linkedin.com">
              <FaLinkedin size={35} style={{ color: "black", marginRight: "1rem" }} />
            </Link>

            <Link to="https://www.github.com">
              <FaGithub size={35} style={{ color: "black", marginRight: "1rem" }} />
            </Link>

          </div>
        </div>

      </div>

    </div>
  )
}

export default Footer
