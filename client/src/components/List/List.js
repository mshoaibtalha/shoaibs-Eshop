import React from 'react';
import './List.scss';
import Card from '../Card/Card';

const List = ({ subCats, maxPrice, sort, catId }) => {
  const data = [
    {
      id: 1,
      img: 'https://images.pexels.com/photos/8007218/pexels-photo-8007218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Racket',
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: 'https://images.pexels.com/photos/8007218/pexels-photo-8007218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Racket',
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: 'https://images.pexels.com/photos/8007218/pexels-photo-8007218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Racket',
      oldPrice: 19,
      isNew: true,
      price: 12,
    },
    {
      id: 4,
      img: 'https://images.pexels.com/photos/8007218/pexels-photo-8007218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Racket',
      oldPrice: 19,
      isNew: true,
      price: 12,
    },
  ];
  return (
    <div className='list'>
      {data.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
