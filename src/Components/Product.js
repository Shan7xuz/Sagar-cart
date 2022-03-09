import React from 'react';

const Product = () => {
  return (
    <>
      <div className=''>
        <img src='/images/peproni.png' alt='pizza' />
        <h2 className='text-lg font-bold py-2'>Havana Spacial</h2>
        <span className='bg-gray-200 py-1 rounded-full text-sm px-4'>
          Small
        </span>
        <div className='flex justify-between items-center mt-4'>
          <span>$500</span>
          <button className='bg-yellow-500 py-1 px-4 rounded-full font-bold'>
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
