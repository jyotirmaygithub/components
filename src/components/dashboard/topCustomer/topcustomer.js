import React from 'react';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import {customers} from '../../../data/data';

const TopCustomers = () => {

  return (
    <div className='m-2 max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden'>
      <div className='p-6'>
        <div className='flex justify-between items-center mb-4'>
          <h1 className='text-xl font-bold'>Top Customers</h1>
        </div>
        <hr />
        <ul>
          {customers.map((customer, index) => (
            <li
              key={index}
              className='flex justify-between items-center border-b py-4 space-x-5'
            >
              <div>
                <p className='font-medium'>{customer.name}</p>
                <div className='flex items-center spacx2'>
                  <p className='text-sm text-gray-500'>
                    {customer.purchases} Purchases
                  </p>
                  <CheckBadgeIcon className='h-4 text-violet-400'/>
                </div>
              </div>
              <div className='text-right'>
                <p className=''>${customer.amount.toLocaleString()}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopCustomers;
