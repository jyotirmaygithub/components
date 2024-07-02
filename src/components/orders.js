import React, { useState } from 'react';
import Orders from '../layout/orders'; // Assuming Orders component is in the same folder
import { OrdersData } from '../data/data';

export default function RecentOrders() {
  const [activeTab, setActiveTab] = useState('active');

  const filteredData = OrdersData.filter((order) => order.status === activeTab);

  return (
    <div className='p-4 md:p-6 lg:p-8  overflow-auto'>
      <div className='bg-white p-6 rounded-lg shadow-lg flex flex-col space-y-4 relative'>
        <div className='flex items-center'>
          <div className='border-l-4 rounded-lg border-blue-300 h-8'></div>
          <h1 className='text-xl font-bold pl-4'>Orders</h1>
        </div>
        <div>
          <ul className='flex flex-wrap space-x-4 mb-3'>
            <li>
              <button
                className={`p-1.5 rounded-lg font-semibold ${
                  activeTab === 'active' && 'bg-violet-100 text-violet-500'
                }`}
                onClick={() => setActiveTab('active')}
              >
                Active Orders
              </button>
            </li>
            <li>
              <button
                className={`p-1.5 rounded-lg font-semibold ${
                  activeTab === 'completed' && 'bg-violet-100 text-violet-500'
                }`}
                onClick={() => setActiveTab('completed')}
              >
                Completed
              </button>
            </li>
            <li>
              <button
                className={`p-1.5 rounded-lg font-semibold ${
                  activeTab === 'cancelled' && 'bg-violet-100 text-violet-500'
                }`}
                onClick={() => setActiveTab('cancelled')}
              >
                Cancelled
              </button>
            </li>
          </ul>
        </div>
        <tbody className='bg-white divide-y divide-gray-200 overflow-x-auto'>
          {filteredData.map((order, index) => (
            <Orders
              key={index}
              status={activeTab}
              person={order.person}
              isOnline={order.isOnline}
              personName={order.personName}
              deliveryDate={order.deliveryDate}
              price={order.price}
              productImage={order.productImage}
            />
          ))}
        </tbody>
      </div>
    </div>
  );
}
