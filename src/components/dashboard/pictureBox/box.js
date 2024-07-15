import React from 'react';
import { BellIcon } from '@heroicons/react/24/outline';

const OfferBox = () => {
  return (
    <div className=' my-2 w-11/12 md:w-3/4 lg:w-1/2 bg-white rounded-lg shadow-lg overflow-hidden'>
      <div className='relative'>
        <img
          src='https://images.unsplash.com/photo-1502239608882-93b729c6af43?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTIzNDJ8MHwxfGFsbHx8fHx8fHx8fDE3MjA5NzA2NzV8&ixlib=rb-4.0.3&q=85' // Replace with your image URL
          alt='Offer Background'
          className='w-full h-60 object-cover'
        />
        <div className='absolute inset-0 bg-black opacity-25'></div>
        <div className='absolute inset-0 flex flex-col justify-between items-start text-white p-6'>
          <div>
            <p>company name</p>
            <h1 className='text-1xl font-bold'>BIG SAVING DAYS</h1>
            <p className='mt-4 text-center p-1 bg-gray-400 rounded-lg opacity-60'>
              Bank Offer: 10% off on Aches Bank Credit Cards, up to $10. On
              orders of $500 and above{' '}
              <span className=' underline cursor-pointer'>T&C</span>
            </p>
          </div>
          <p className='p-1 rounded-lg  bg-gray-400 opacity-60 text-center'>15 Jan 2022 - 19 Jan 2022</p>
        </div>
      </div>
      <div className='p-6 bg-white '>
        <p className='mt-2 font-semibold text-start text-violet-500'>Biggest sale is back.</p>
        <p className='mt-2  text-gray-600'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore harum
          accusamus eum dolorum sapiente. Saepe.
        </p>
        <div className='mt-6 flex justify-start space-x-4'>
          <button className='px-4 py-2 bg-violet-500 text-white rounded-lg'>
            Notify Me
          </button>
          <button className='px-4 py-2 border-violet-300 border-2 rounded-lg text-violet-400 font-semibold'>
            offers
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferBox;
