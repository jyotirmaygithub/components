import React from 'react';

const Orders = ({
  status,
  person,
  isOnline,
  personName,
  deliveryDate,
  price,
  productImage,
}) => {
  return (
    <tr className='border-b border-gray-200 hover:bg-gray-100'>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='flex items-center'>
          <div className='relative w-max'>
            <img
              className='w-9 h-9 rounded-full object-cover'
              src={person}
              alt={personName}
            />
            <span
              className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                isOnline ? 'bg-green-500' : 'bg-gray-500'
              }`}
            ></span>
          </div>
          <div className='ml-2'>
            <div className='text-sm font-semibold text-gray-400'>Name</div>
            <div className='font-semibold'>{personName}</div>
          </div>
        </div>
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='text-sm font-semibold text-gray-400'>Price</div>
        <div>${price}</div>
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div
          className={`text-sm font-semibold text-gray-400 ${
            status === 'completed' ? 'text-green-500' : 'text-red-500'
          }`}
        >
          {status === 'active' && 'Delivery Date'}
          {status === 'completed' && 'Delivered On'}
          {status === 'cancelled' && 'Cancelled Date'}
        </div>
        <div>{deliveryDate}</div>
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <img
          className='w-9 h-9 rounded-full object-cover mx-auto'
          src={productImage}
          alt={personName}
        />
      </td>
      <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
        <svg
          className='w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-600'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M9 5l7 7-7 7'
          ></path>
        </svg>
      </td>
    </tr>
  );
};

export default Orders;
