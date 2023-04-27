import React from 'react';
import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';




const Newsletter = () => {
  return (
    <div className='app__newsletter'>
      <div className="app__newsletter_content">
        <SubHeading title="Newsletter" />
        <h1 className='headtext__cormorant'>Subscribe to Our Newsletter</h1>
        <p className='p__opensans'>And never miss latest Updates!</p>
      </div>
      <form className="app__newsletter_subscription" id='submit'>
        <input type="text" placeholder='Enter Your Email Address'/>
        <button className="custom__button" type='button'>Subscribe</button>
      </form>
    </div>
  );
}

export default Newsletter;
