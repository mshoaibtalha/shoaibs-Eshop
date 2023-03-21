import React from 'react';
import './Cart.scss';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const Cart = () => {
  const data = [
    {
      id: 1,
      img: 'https://images.pexels.com/photos/8007218/pexels-photo-8007218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Racket',
      isNew: true,
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: 'https://images.pexels.com/photos/8007218/pexels-photo-8007218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Racket',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];

  const totalPrice = () => {
    let total = 0;
    data.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  return (
    <div className='cart'>
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className='item' key={item.id}>
          <img src={item.img} alt='' />
          <div className='details'>
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className='price'>
              {item.quantity} x ${item.price}
            </div>
          </div>
          <DeleteOutlinedIcon className='delete' />
        </div>
      ))}
      <div className='total'>
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className='reset'>Reset Cart</span>
    </div>
  );
};

export default Cart;
