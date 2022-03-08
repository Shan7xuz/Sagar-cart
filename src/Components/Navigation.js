import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const cartStyle = {
    backgroundColor: '#f59e0d',
    display: 'flex',
    padding: '6px 12px',
    borderRadius: '15px',
  };
  return (
    <>
      <div className='container mx-auto flex items-center justify-between py-4'>
        <div>
          <Link to='/'>
            <img style={{ height: 45 }} src='/images/logo.png' alt='logo' />
          </Link>
          <ul className='flex items-center'>
            <li className=''>
              <Link to='/'>Home</Link>
            </li>
            <li className='ml-6'>
              <Link to='/products'>Products</Link>
            </li>
            <li className='ml-6'>
              <Link to='/cart'>
                <div style={cartStyle}>
                  <span className='text-white'>0</span>
                  <img className='ml-2 ' src='/images/cart.png' alt='cart' />
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navigation;
