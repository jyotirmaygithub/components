// src/App.js
import React from 'react';
import RecentOrder from '../layout/recentOrder';
import { FiMoreVertical } from 'react-icons/fi';

const orders = [
  {
    image: 'https://via.placeholder.com/150',
    title: 'Order 1',
    type: 'Type A',
    price: 29.99,
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Order 2',
    type: 'Type B',
    price: 39.99,
  },
  // Add more orders as needed
];

const App = () => {
  return (
    <div className="w-[400px] p-4">
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Recent Orders</h1>
          <FiMoreVertical className="text-gray-500" />
        </div>
        <div className="space-y-4">
          {orders.map((order, index) => (
            <RecentOrder
              key={index}
              image={order.image}
              title={order.title}
              type={order.type}
              price={order.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
