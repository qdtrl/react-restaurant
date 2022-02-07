import { useRef } from 'react';
import {BsArrowRightShort, BsInstagram, BsArrowLeftShort } from 'react-icons/bs';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const imgs = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];
const Gallery = () => {
const scrollRef = useRef(null);

const scroll = (direction) => {
  const { current } = scrollRef;

  if (direction === 'left')
    current.scrollLeft -= 300;
  else
    current.scrollLeft += 300;
}
return (
  <div className='app__gallery flex__center'>
    <div className='app__gallery-content'>
      <SubHeading title='Instagram'/>
      <h1 className='headtext__cormorant'>Photo Gallery</h1>
      <p className='p__opensans' style={{ color: '#AAA', marginTop: '2rem'}}>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Curabitur Venenatis Vehicula Magna Imperdiet Laoreet. Mauris At Nibh Magna. Nullam Facilisis.</p>
      <button type='button' className='custom__button'>View More</button> 
    </div>
    <div className='app__gallery-images'>
      <div className='app__gallery-images_container' ref={scrollRef}>
        {imgs.map((img, index) => (
          <div className='app__gallery-images_card flex__center' key={`img ${index+1}`}>
            <img src={img} alt='gallery'/>
            <BsInstagram className='gallery__images-icon'/>
          </div>
        ))}
      </div>
      <div className='app__gallery-images_arrow'>
        <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')}/>
        <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')}/>
      </div>
    </div>
  </div>
);
}
export default Gallery;
