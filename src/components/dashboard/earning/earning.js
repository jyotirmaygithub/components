// src/components/EarningsBox.js
import React from 'react';

const EarningsBox = () => {
  return (
    <div className='p-4 bg-white shadow-md rounded-md space-y-2'>
      <div className='flex items-center'>
        <div className='border-l-4 rounded-lg border-blue-300 h-8'></div>
        <h1 className='text-xl font-bold pl-4'>Earnings</h1>
      </div>
      <div className='flex text-center justify-center space-x-28 border-t border-gray-200 pt-4'>
        <div className='flex-col items-start justify-start'>
          <div className='flex items-center space-x-1'>
            <p className='w-2 h-2 rounded-full bg-violet-200'></p>
            <p className=' text-gray-600'>First Half</p>
          </div>
          <p className='text-xl font-semibold text-gray-800'>
            $51.94k{' '}
            <span className=' text-sm p-1 rounded-lg bg-green-100 text-green-500'>
              +0.9%
            </span>
          </p>
        </div>
        <div className='flex-col justify-between items-center'>
          <div className='flex items-center space-x-1'>
            <p className='w-2 h-2 rounded-full bg-violet-400'></p>
            <p className=' text-gray-600'>Top Gross</p>
          </div>
          <p className='text-xl font-semibold text-gray-800'>
            $18.32k{' '}
            <span className=' text-sm p-1 rounded-lg bg-green-100 text-green-500'>
              +0.39%
            </span>
          </p>
        </div>
        <div className='flex-col justify-between items-center'>
          <div className='flex items-center space-x-1'>
            <p className='w-2 h-2 rounded-full bg-gray-200'></p>
            <p className=' text-gray-600'>Second Half</p>
          </div>
          <p className='text-xl font-semibold text-gray-800'>
            $38k{' '}
            <span className=' text-sm p-1 rounded-lg bg-red-100 text-red-500'>
              -0.15%
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EarningsBox;
