import React, { useState } from 'react';
import './Slider.scss';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';

const Slider = () => {
  const data = [
    'https://images.pexels.com/photos/3660204/pexels-photo-3660204.jpeg',
    'https://images.pexels.com/photos/2202685/pexels-photo-2202685.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/2766342/pexels-photo-2766342.jpeg?auto=compress&cs=tinysrgb&w=1600',
  ];
  const [currentSlide, setcurrentSlide] = useState(0);
  const prevSlide = () => {
    setcurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setcurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };
  return (
    <div className='slider'>
      <div
        className='container'
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={data[0]} alt='' />
        <img src={data[1]} alt='' />
        <img src={data[2]} alt='' />
      </div>
      <div className='icons'>
        <div className='icon' onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className='icon' onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
