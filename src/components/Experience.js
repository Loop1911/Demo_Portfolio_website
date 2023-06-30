import React from 'react';
import './Experience.css';
import {Link} from 'react-router-dom';


const Experience = () => {
  return (
    <div className="Body">
      <section className="dark">
        <div className="container "style={{paddingTop:"8px",paddingBottom:"8px"}}>
          <h1 className="h1 text-center" id="pageHeaderTitle" style={{ paddingLeft:"4rem",color:"white",fontFamily:"diphylleia",textAlign:"start",fontSize:"3rem"}}>Experiences</h1>
          <div className="postcard_div1">
          <div className="postcard dark blue">
            <Link className="postcard__img_link" to="#">
              <img className="postcard__img" src="https://picsum.photos/1000/1000" alt="Image Title" />
            </Link>
            <div className="postcard__text">
              <h1 className="postcard__title blue"><Link to="#">Company 1</Link></h1>
              <div className="postcard__subtitle small">
              
                  <i className="faCalendarAlt" style={{margin:"2rem"}}></i>February 2023 - Present
        
              </div>
              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt" style={{paddingTop:"1.5rem"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
            </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dark">
        <div className="containe"style={{paddingTop:"8px",paddingBottom:"8px"}}>
          <div className="h1 text-center" id="pageHeaderTitle"></div>
          <div className="postcard_div2">
          <div className="postcard dark blue">
            <Link className="postcard__img_link" to="#">
              <img className="postcard__img" src="https://picsum.photos/1000/1000" alt="Image Title" />
            </Link>
            <div className="postcard__text">
              <h1 className="postcard__title blue"><a href="#">Company2</a></h1>
              <div className="postcard__subtitle small">
               
                  <i className="fas fa-calendar-alt" style={{margin:"2rem"}}></i>April 2023 - Present
            
              </div>
              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt"style={{paddingTop:"1.5rem"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Experience;