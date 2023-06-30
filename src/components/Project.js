import React from 'react'
import {Link} from 'react-router-dom'
import './Project.css'

const Project = () => {
  return (
<div className="container4">
  <h1 className="header1" style={{paddingBottom:"2rem"}}>My Projects</h1>
  <div className="row1">
    <div className="card1">
     <Link to="https://github.com/Loop1911/Shopping-cart-react"><img src="https://static2.bigstockphoto.com/1/7/3/large1500/371734621.jpg" alt="Image 1"/></Link> 
      <div className="card-content">
        <h3>Card Title 1</h3>
        <p classname="p4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
    <div className="card1">
     <Link to="/"><img src="https://static2.bigstockphoto.com/1/7/3/large1500/371734621.jpg" alt="Image 2"/></Link> 
      <div className="card-content">
        <h3>Card Title 2</h3>
        <p classname="p4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
    <div className="card1">
     <Link to="/"><img src="https://static2.bigstockphoto.com/1/7/3/large1500/371734621.jpg" alt="Image 2"/></Link> 
      <div className="card-content">
        <h3>Card Title 2</h3>
        <p classname="p4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
    <div className="card1">
    <Link to="/"><img src="https://static2.bigstockphoto.com/1/7/3/large1500/371734621.jpg" alt="Image 2"/></Link>  
      <div className="card-content">
        <h3>Card Title 2</h3>
        <p classname="p4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  </div>
</div>
  );
};



export default Project

