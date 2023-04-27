import React from 'react';
import { images } from '../../constants';
import './Chef.css';
import SubHeading from "../../components/SubHeading/SubHeading";


const Chef = () => {
  return (
    <div className="app__chef flex__center section__padding">
      <div className="app__chef_image">
        <img src={images.chef} alt="chef" />
      </div>
      <div className="app__chef_content">

        <div className="app__chef_content-heading">
        <SubHeading title="Chef’s Word" />
        <h1 className="headtext__cormorant">What we believe in</h1>
        </div>

        <div className="app__chef_content-quote">
          <img src={images.quote} alt="" />
          <div>
          <span className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</span> 
          <p className='p__opensans'>
            auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. 
            Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.
          </p>
          </div>
        </div>

        <div className="app__chef_content-founder">
          <h3 className='headpara__cormorant'>Kevin Luo</h3>
          <p className='p__opensans'>Chef & Founder</p>
          <img src={images.sign} alt="sign" />
        </div>
      </div>

    </div>
  );
}

export default Chef;
