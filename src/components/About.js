import React from 'react'
import './About.css'
import { FaCss3, FaNode, FaHtml5, FaJs, FaReact } from 'react-icons/fa'

const About = () => {
  return (
    
    <div className='icons-main'>
   <div>
    <div>
      

      <div>
        <h1 className='header2'style={{paddingBottom:"1.5rem"}}>
    Skills I'm Good At
        </h1>
      </div>
      
    
        <ul className='icons1'>
          <li>
            <div className="icon-wrapper">
              <FaHtml5 size={35} style={{ color: "black", marginRight: "1.5rem" }} />
              <h4 style={{color:'black'}}>HTML 5</h4>
            </div>
          </li>
          <li>
            <div className="icon-wrapper">
              <FaCss3 size={35} style={{ color: "black", marginRight: "1.5rem" }} />
              <h4 style={{color:'black'}}>CascadingStyle Sheets</h4>
            </div>
          </li>
          <li>
            <div className="icon-wrapper">
              <FaCss3 size={35} style={{ color: "black", marginRight: "1.5rem" }} />
              <h4 style={{color:'black'}}>TAILWIND CSS</h4>
            </div>
          </li>
          <li>
            <div className="icon-wrapper">
              <FaJs size={35} style={{ color: "black", marginRight: "1.5rem" }} />
              <h4 style={{color:'black'}}>JAVASCRIPT</h4>
            </div>
          </li>
          <li>
            <div className="icon-wrapper">
              <FaJs size={35} style={{ color: "black", marginRight: "1.5rem" }} />
              <h4 style={{color:'black'}}>TYPESCRIPT</h4>
            </div>
          </li>
          <li>
            <div className="icon-wrapper">
              <FaNode size={35} style={{ color: "black", marginRight: "1.5rem" }} />
              <h4 style={{color:'black'}}>Node.Js</h4>
            </div>
          </li>
          <li>
            <div className="icon-wrapper">
              <FaReact size={35} style={{ color: "black", marginRight: "1.5rem" }} />
              <h4 style={{color:'black'}}>REACTJS</h4>
            </div>
          </li>
        </ul>
      </div>
     


<br></br>
      </div>
     <div>
        <h1 className='header3'style={{paddingTop:"1rem"}}>
          About Me
        </h1>
      </div>

      <p className="para3" style={{color:'black',margin:"2rem",paddingBottom:"2rem"}}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat mi quis tristique lacinia.
  Nulla nec lorem mattis, elementum mauris nec, molestie mi. Integer congue neque et est commodo,
  a dapibus sapien malesuada. Maecenas suscipit lacinia vestibulum. Duis in leo a ligula tempor
  tristique. Ut vehicula elit in justo congue, ac hendrerit sem efficitur. Donec eget mauris nec
  sem convallis blandit. Nulla facilisi. Nulla ultrices justo eu aliquet venenatis. Nam in dui
  eget dolor feugiat sollicitudin a nec odio.
</p>
    
    </div>
  )
}

export default About
