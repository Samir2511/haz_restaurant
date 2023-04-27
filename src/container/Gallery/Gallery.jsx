import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button type="button" className="custom__button">View More</button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
















































































// import React from 'react';
// import SubHeading from '../../components/SubHeading/SubHeading';
// import './Gallery.css';
// import { images } from '../../constants';
// import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';



// const ImgCard = ({image, alt}) => {
//   return (
//     <div className="app__gallery-imgs_card">
//       <img src={image} alt={alt} />
//       <BsInstagram className='insta'/>
//     </div>
//   );
// }




// const Gallery = () => {

//   const scrollRef = React.useRef(null);

//   const scroll = (direction) => {

//     const { current } = scrollRef;

//     if (direction === 'left') {
//       current.scrollLeft -= 300;
//     } else {
//       current.scrollLeft += 300;
//     }
//   }

//   return (
//     <div className="app__gallery flex__center">
//       <div className="app__gallery-content">
//         <SubHeading title="Instagram" />
//         <h1 className='headtext__cormorant' style={{marginBottom: "2rem", fontWeight:"bold"}}>Photo Gallery</h1>
//         <p className='p__opensans' style={{ color: "#AAAAAA", width: "491px"}}>
//         Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Volutpat Mattis Ipsum Turpis Elit Elit Scelerisque Egestas Mu.
//         </p>
//         <button className="custom__button">View More</button>
//       </div>
//       <div className="app__gallery-images">
//       <div className="app__gallery-imgs_container" ref={scrollRef}>
//         {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
//           <ImgCard key={index} image={image} alt={`${image}`}/>
//           ))}
//       <div className="arrows-container">
//         <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll("left")} />
//           <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll("right")}/>
//       </div>
//       </div>
//       </div>
//     </div>
//   );
// }

// export default Gallery;
