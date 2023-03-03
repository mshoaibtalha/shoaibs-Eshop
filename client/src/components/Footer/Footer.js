import React from 'react';
import './Footer.scss';

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='bottom'>
        <div className='left'>
          <span className='logo'>Shoaibs Eshop</span>
          <span className='copyright'>@ Copy 2023. All Rights Reserved</span>
        </div>
        <div className='right'>
          <img src='/img/stripe.png' alt='' />
        </div>
      </div>
    </div>
  );
};
