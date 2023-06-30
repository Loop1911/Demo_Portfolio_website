import React from 'react'
import './ContactUs.css'
const ContactUs = () => {
  return (
    <div>

      <form>     
        <h1 className='header4' style={{color:"white",fontSize:"4rem"}}>Contact Me</h1> 
        <h2 className="header5" style={{color:"white",fontSize:"2 rem",width:"100%"}}>"I would Love To See Your Response"</h2>
  <input name="name" type="text" class="feedback-input" placeholder="Name" />   
  <input name="email" type="text" class="feedback-input" placeholder="Email" />
  <textarea name="text" class="feedback-input" placeholder="Comment"></textarea>
  <input type="submit" value="SUBMIT"/>
</form>
<div style={{paddingBottom:"3rem"}}></div>
    </div>
  )
}

export default ContactUs
