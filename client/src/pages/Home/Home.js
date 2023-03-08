import React from 'react';
import Slider from '../../components/slider/Slider';
import './Home.scss';
import FeaturedProducts from '../../components/FeaturedProduct/FeaturedProducts';

export const Home = () => {
  return (
    <div>
      <Slider />
      <FeaturedProducts type='Featured' />
      <FeaturedProducts type='Trending' />
    </div>
  );
};
