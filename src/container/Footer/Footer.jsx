import React from 'react';
import { FooterOverlay, Newsletter, SubHeading } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { images } from '../../constants';

import './Footer.css';





const Footer = () => {
  return ( 
    <div className="app__footer section__padding" id='login'>
      <FooterOverlay />
      <Newsletter />
      
      <div className="app__footer-links section__padding">
        <div className="app__footer-links_contact">
          <p className='p__cormorant' style={{fontSize: "32px", fontWeight: "normal"}}>Contact Us</p>
          <p className='p__opensansA' style={{marginBottom: "0"}}>9 W 53rd St, New York, NY 10019, USA</p>
          <p className='p__opensansA'>+1 212-344-1230
            <br />+1 212-555-1230
          </p>
        </div>
        <div className="app__footer-links_logo">
          <h2 className='headtext__cormorant'>Gerícht</h2>
          <p className='p__opensansA' >"The best way to find yourself is to lose yourself in the service of others.”</p>
          <img src={images.spoon} alt="spoon" style={{ marginTop: "15px" }} />
          <div className="app__footer-links_icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>
        <div className="app__footer-links_work">
          <p className='p__cormorant' style={{fontSize: "32px", fontWeight: "normal"}}>Working Hours</p>
          <p className='p__opensansA'>Monday-Friday:<br/>
            08:00 am -12:00 am
          </p>
          <p className='p__opensansA'>Saturday-Sunday:<br/>
            07:00am -11:00 pm
          </p>
        </div>
      </div>

      <div className="app__footer-copyright">
        <p className='p__opensansA' style={{ color: '#AAAAAA' }}>
          2023 Gerícht. All Rights reserved.
        </p>
      </div>

    </div>
  );
}

export default Footer;
