import React from 'react';
import { images, data } from '../../constants';

import SubHeading from "../../components/SubHeading/SubHeading";

import './Laurels.css';




const AwardCard = ({imgUrl, title, subtitle}) => {
  return (
    <div className="app__awardcard">
      <img src={imgUrl} alt="" />
      <div className='h'>
        <p className='p__cormorant' style={{ color: "#DCCA87"}}>{title}</p>
          <p className='p__opensans'>{subtitle}</p>
      </div>
    </div>
  );
}




const Laurels = () => {

  return (
    <div className="app__bg app__wrapper section__padding" id='awards'>

      <div className="app__wrapper_info">
          <SubHeading title="Awards & Recognition" />
          <h1 className='headtext__cormorant' style={{fontWeight: "bold"}}>Our Laurels</h1>

        <div className="app__laurels_content-award-container">
          {data.awards.map((d, i) => {
            return (
              <AwardCard key={i} imgUrl={d.imgUrl} title={d.title} subtitle={d.subtitle} />
          )
        })}
        </div>

      </div>

      <div className="app__wrapper_img">
        <img src={images.laurels} alt="laurels-img" />
      </div>

      </div>
);
}
export default Laurels;
