import React from 'react';

const RecentOrder = ({
  productName,
  productId,
  price,
  status,
  sales,
  revenue,
}) => {
  // using function for the mathematical commas on numbers.
  const formattedSales = new Intl.NumberFormat().format(sales);
  const formattedRevenue = new Intl.NumberFormat().format(revenue);

  const getStatusClass = (status) => {
    switch (status) {
    case 'green':
      return 'text-green-400 bg-green-100';
    case 'red':
      return 'text-red-400 bg-red-100';
    case 'yellow':
      return 'text-yellow-400 bg-yellow-100';
    case 'violet':
      return 'text-violet-400 bg-violet-100';
    default:
      return 'text-gray-400 bg-gray-100';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
    case 'green':
      return 'Available';
    case 'red':
      return 'Not Available';
    case 'yellow':
      return 'Limited Deal';
    case 'violet':
      return 'In Offer';
    default:
      return 'Unknown Status';
    }
  };

  return (
    <tr className='bg-white font-semibold border-b border-gray-200'>
      <td className='px-4 py-2 whitespace-nowrap border-r border-gray-200'>
        <div className='flex items-center'>
          <div className='flex-shrink-0 h-10 w-10'>
            <img
              className='h-10 w-10 rounded-full object-cover'
              src='https://images.unsplash.com/photo-1721109890030-00faaa68981f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTIzNDJ8MHwxfGFsbHx8fHx8fHx8fDE3MjEzMDE2NXx8&ixlib=rb-4.0.3&q=85'
              alt={productName}
            />
          </div>
          <div className='ml-4'>
            <div className='text-sm font-medium text-gray-900'>
              {productName}
            </div>
          </div>
        </div>
      </td>
      <td className='px-6 py-4 whitespace-nowrap text-sm border-r border-gray-200'>
        {productId}
      </td>
      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-r border-gray-200'>
        {price}
      </td>
      <td className='px-6 py-4 whitespace-nowrap border-r border-gray-200'>
        <span
          className={`${getStatusClass(
            status
          )} inline-block rounded-lg p-1 font-semibold text-xs`}
        >
          {getStatusText(status)}
        </span>
      </td>
      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-r border-gray-200'>
        {formattedSales}
      </td>
      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
        {formattedRevenue}
      </td>
    </tr>
  );
};

export default RecentOrder;
