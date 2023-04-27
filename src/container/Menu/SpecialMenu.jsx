import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import './SpecialMenu.css';
import { images, data } from '../../constants';
import MenuItem from '../../components/Menuitem/MenuItem';

const SpecialMenu = () => {
  return (
    <div className="app__specialMenu section__padding" id='menu'>
      <div className="app__specialMenu-title" style={{marginBottom: "4rem"}}>
        <SubHeading title="Menu that fits you palatte" />
        <h1 className='headtext__cormorant'>Today’s Special</h1>
      </div>

      <div className="app__specialMenu-content">

        <div className="app__specialMenu-content_drinks flex__center">
          <p className='app__specialMenu-content_heading p__cormorant'>Drinks</p>
          <div className="app__specialMenu-content_items">
            {data.wines.map((item, index) => {
              return (
                <MenuItem key={index} title={item.title} price={item.price} tags={item.tags} />
              );
            })}
          </div>
        </div>
        
        <div className="app__specialMenu-content_image flex__center">
        <img src={images.menu} alt="" />
        </div>
        
        <div className="app__specialMenu-content_cocktails flex__center">
          <p className='app__specialMenu-content_heading p__cormorant'>Cocktails</p>
          <div className="app__specialMenu-content_items">
            {data.cocktails.map((cocktail, index) => {
              return (
                <MenuItem key={index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
              );
            })}
          </div>
        </div>

      </div>
      
      <div style={{margin: "15px auto 0"}}>
        <button type="button" className="custom__button">View More</button>
        </div>

    </div>
  );
};

export default SpecialMenu;
