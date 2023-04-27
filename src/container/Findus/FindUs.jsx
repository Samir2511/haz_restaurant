import React from 'react';
import SubHeading from "../../components/SubHeading/SubHeading";
import { images } from "../../constants";



const FindUs = () => {
  return (
    <div className='app__wrapper app__bg section__padding' id='contact'>

    <div className="app__wrapper_info">
        <SubHeading title="Contact" />
        <h1 className='headtext__cormorant'>Find Us</h1>
        <div className="app__wrapper-content">
        <p className='p__opensans' style={{ color: "rgb(170, 170, 170)", marginTop: "3rem" }}>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
        <p className='p__cormorant' style={{ color: "rgb(220, 202, 135)", marginTop: "2rem" }}>Opening Hours</p>
        <p className='p__opensans' style={{marginBottom: "0", marginTop: "2rem"}}>Mon - Fri: 10:00 am - 02:00 am</p>
        <p className='p__opensans' style={{marginBottom: "2rem"}}>Sat - Sun: 10:00 am - 03:00 am</p>
        <button type='button' className="custom__button">View More</button>
        </div>
      </div>
      
      <div className="app__wrapper_img">
        <img src={images.findus} alt="findus"/>
      </div>


  </div>
  );
}

export default FindUs;
