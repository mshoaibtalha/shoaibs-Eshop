import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import './navbar.scss';

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='left'>
          <img src='/img/usd.jpg' width={35} alt='flag' />
          <KeyboardArrowDownIcon />
          <div className='item'>
            <Link className='link' to='/products/1'>
              Bedminton
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to='/products/1'>
              Tenis
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to='/products/1'>
              Table Tenis
            </Link>
          </div>
        </div>
        <div className='senter'>
          <Link className='link' to='/'>
            Shoaib Shop
          </Link>
        </div>
        <div className='right'>
          <div className='item'>
            <Link className='link' to='/'>
              Home page
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to='/'>
              About Us
            </Link>
          </div>
          <div className='icon'>
            <SearchIcon />
            <PersonIcon />
            <div className='carticon'>
              <AddShoppingCartIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
