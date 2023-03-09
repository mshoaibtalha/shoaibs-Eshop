import React from 'react';
import Slider from '../../components/slider/Slider';
import './Home.scss';
import FeaturedProducts from '../../components/FeaturedProduct/FeaturedProducts';
import Categories from '../../components/catagory/Categories';
import Contact from '../../components/contact/Contact';

export const Home = () => {
  return (
    <div>
      <Slider />
      <FeaturedProducts type='Featured' />
      <Categories />
      <FeaturedProducts type='Trending' />
      <Contact />
    </div>
  );
};
