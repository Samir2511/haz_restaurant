import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import images from "../../constants/images"
import './Navbar.css';




const Navbar = () => {

    const [isToggleMenu, setIsToggleMenu] = React.useState(false);

  return (
    <nav className='app__navbar'>
    <div className="app__navbar-logo">
      <img src={images.gericht} alt="app logo" />
    </div>
    <ul className='app__navbar-links'>
      <li className='p__opensans'><a href='#home'>Home</a></li>
      <li className='p__opensans'><a href='#about'>About</a></li>
      <li className='p__opensans'><a href='#menu'>Menu</a></li>
      <li className='p__opensans'><a href='#awards'>Awards</a></li>
      <li className='p__opensans'><a href='#contact'>Contact</a></li>
    </ul>
    <div className="app__navbar-login">
      <a href='#login' className='p__opensans'>Log In / Registration</a>
      <div />
      <a href='/' className='p__opensans'>Book Table</a>
    </div>


    <div className="app__navbar-smallscreen">
      <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setIsToggleMenu(true)} />
        { isToggleMenu &&
        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
          <MdOutlineRestaurantMenu cursor="pointer" fontSize={27} className="overlay__close" onClick={() => setIsToggleMenu(false)} />
          <ul className="app__navbar-smallscreen-links">
            <li className='p__opensans'><a href='#home' onClick={() => setIsToggleMenu(false)}>Home</a></li>
            <li className='p__opensans'><a href='#about' onClick={() => setIsToggleMenu(false)}>About</a></li>
            <li className='p__opensans'><a href='#menu' onClick={() => setIsToggleMenu(false)}>Menu</a></li>
            <li className='p__opensans'><a href='#awards' onClick={() => setIsToggleMenu(false)}>Awards</a></li>
            <li className='p__opensans'><a href='#contact' onClick={() => setIsToggleMenu(false)}>Contact</a></li>
          </ul>
        </div>}
    </div>
  </nav>
);
}

export default Navbar;
