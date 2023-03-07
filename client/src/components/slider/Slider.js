import React from 'react';
import './Slider.scss';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';

const Slider = () => {
  const data = [
    'https://images.pexels.com/photos/3660204/pexels-photo-3660204.jpeg',
    'https://images.pexels.com/photos/2202685/pexels-photo-2202685.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/2766342/pexels-photo-2766342.jpeg?auto=compress&cs=tinysrgb&w=1600',
  ];
  return (
    <div className='slider'>
      <div className='container'>
        <img src={data[0]} alt='' />
        <img src={data[1]} alt='' />
        <img src={data[2]} alt='' />
      </div>
      <div className='icons'>
        <div className='icon'>
          <WestOutlinedIcon />
        </div>
        <div className='icon'>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
