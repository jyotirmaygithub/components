// src/components/RecentOrder.js
import React from 'react';

const RecentOrder = ({ image, title, type, price }) => {
  return (
    <div className="flex items-center p-4 bg-white shadow-md rounded-lg">
      <img className="w-16 h-16 rounded-full object-cover" src={image} alt={title} />
      <div className="ml-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-500">{type}</p>
        <p className="text-indigo-600 font-bold">${price}</p>
      </div>
    </div>
  );
};

export default RecentOrder;
