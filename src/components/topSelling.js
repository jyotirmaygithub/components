import React from 'react';
import TopSelling from '../layout/topSelling';
import { SalesData } from '../data/data';

export default function RecentOrders() {
  return (
    <div className='p-4 overflow-auto'>
      <div className='p-6 rounded-lg shadow-lg'>
        <div className='flex gap-2'>
          <div className='border-l-4 rounded-lg border-blue-300 h-8'></div>
          <h1 className='text-xl font-bold mb-4'>Top Selling Products</h1>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table className='min-w-full divide-y divide-gray-200'>
            <thead>
              <tr>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  S.no
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Product Name
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Category
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Stock
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Total Sales
                </th>
              </tr>
            </thead>
            <tbody className='bg-white divide-y divide-gray-200'>
              {SalesData.map((sale, index) => (
                <TopSelling
                  key={index}
                  sNo={sale.sNo}
                  productName={sale.productName}
                  type={sale.type}
                  stock={sale.stock}
                  sales={sale.sales}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
