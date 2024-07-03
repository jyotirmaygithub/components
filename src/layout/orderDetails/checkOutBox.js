import React from 'react';

const CheckoutBox = ({
  itemImage,
  itemName,
  itemSize,
  itemColor,
  trackingId,
  price,
  quantity,
  totalPrice,
  itemOffer,
}) => {
  return (
    <tr className='space-x-5 text-sm font-semibold'>
      <td className='flex items-center space-x-4 p-4'>
        <img
          src={itemImage}
          alt={itemName}
          className='w-16 h-16 object-cover rounded-lg'
        />
      </td>
      <td>
        <div className='flex-col'>
          <p className='font-bold'>{itemName}</p>
          <p>
            Size: <span className='text-gray-400'>{itemSize}</span>
          </p>
          <p>
            Color: <span className='text-gray-400'>{itemColor}</span>
            {itemOffer && (
              <span
                className={`inline-block px-1 py-0.5 font-semibold rounded text-xxs ${
                  itemOffer === true
                    ? 'bg-green-400 text-green-100'
                    : 'bg-blue-400 text-blue-100'
                } ml-2`}
              >
                {itemOffer === true ? 'In Offer' : `${itemOffer}% Off`}
              </span>
            )}
          </p>
        </div>
      </td>
      <td className='p-4'>
        <p className='text-violet-400'>{trackingId}</p>
      </td>
      <td className='p-4'>
        <p className='font-semibold'>${price}</p>
      </td>
      <td className='p-4'>
        <p className='text-gray-600'>{quantity}</p>
      </td>
      <td className='p-4'>
        <p className='text-gray-600'>${totalPrice}</p>
      </td>
    </tr>
  );
};

export default CheckoutBox;
