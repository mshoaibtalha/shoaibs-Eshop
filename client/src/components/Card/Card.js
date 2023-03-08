import React from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
  return (
    <Link to={`/product/${item.div}`}>
      <div>Card</div>;
    </Link>
  );
};

export default Card;
