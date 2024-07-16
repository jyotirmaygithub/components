import React from 'react';
import Overview from './utils/tableRow';
import { products } from '../../../data/data';

export default function RecentOrders() {
  return (
    <div className='p-4 overflow-auto'>
      <div className='p-6 rounded-lg shadow-lg'>
        <div className='flex gap-2 items-center mb-4'>
          <div className='border-l-4 rounded-lg border-blue-300 h-8'></div>
          <h1 className='text-xl font-bold'>Product Overview</h1>
        </div>
        <div className='flex space-x-2 items-center mb-4'>
          <div className='relative'>
            <input
              type='text'
              placeholder='Search here'
              className='pl-1 pr-4 py-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            />
          </div>
          <button className='px-4 py-1 bg-violet-500 text-white rounded-lg shadow-md '>
            Sort by
          </button>
        </div>
        <div className='overflow-x-auto'>
          <table className='min-w-full divide-y divide-gray-200 border border-gray-200'>
            <thead className='bg-gray-50'>
              <tr>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border-r border-gray-200'
                >
                  Name
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border-r border-gray-200'
                >
                  Product Id
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border-r border-gray-200'
                >
                  Price
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider border-r border-gray-200'
                >
                  Status
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border-r border-gray-200'
                >
                  Sales
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider'
                >
                  Revenue
                </th>
              </tr>
            </thead>
            <tbody className='bg-white divide-y divide-gray-200'>
              {products.map((product, index) => (
                <Overview
                  key={index}
                  productName={product.name}
                  productId={product.id}
                  price={product.price}
                  status={product.status}
                  sales={product.sales}
                  revenue={product.revenue}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
