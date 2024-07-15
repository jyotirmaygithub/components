import React from 'react';
import { ArrowTrendingUpIcon } from '@heroicons/react/24/solid';

const TopCountriesSales = () => {
  const data = {
    totalSales: 38256,
    change: 12.24,
    countries: [
      { name: 'France', sales: 5932 },
      { name: 'Spain', sales: 5383 },
      { name: 'Argentina', sales: 4825 },
      { name: 'UAE', sales: 4527 },
      { name: 'Germany', sales: 4501 },
    ],
  };

  return (
    <div className='m-2 max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden'>
      <div className='p-6'>
        <div className='flex items-center mb-2'>
          <div className='border-l-4 rounded-lg border-blue-300 h-8'></div>
          <h1 className='text-xl font-bold pl-4'>Top Countries By Sales</h1>
        </div>
        <hr />
        <div className='flex space-x-4 text-gray-700 items-center mb-4'>
          <p className='text-2xl font-semibold'>
            {data.totalSales.toLocaleString()}
          </p>
          <p className='ml-2 text-xxs font-bold text-violet-500 bg-violet-200 p-1 rounded-lg'>
            {data.change}%
          </p>
          <p className='text-sm text-gray-500'>Since last week</p>
        </div>
        <table className='min-w-full'>
          <thead>
            <tr>
              <th className='py-2 text-left font-semibold text-gray-700'>Country</th>
              <th className='py-2 text-left font-semibold text-gray-700'>Trend</th>
              <th className='py-2 text-right font-semibold text-gray-700'>Sales</th>
            </tr>
          </thead>
          <tbody>
            {data.countries.map((country, index) => (
              <tr key={index} className='border-b'>
                <td className='py-2 font-medium'>{country.name}</td>
                <td className='py-2'><ArrowTrendingUpIcon className='h-4 inline text-green-400'/></td>
                <td className='py-2 font-semibold text-right'>{country.sales.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopCountriesSales;
