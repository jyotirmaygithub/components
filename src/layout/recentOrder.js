import React from "react";

const RecentOrder = ({ image, title, type, price }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
      <div className="flex items-start">
        <img
          className="w-16 h-16 md:w-12 md:h-12 rounded-lg object-cover"
          src={image}
          alt={title}
        />
        <div className="ml-4">
          <h3 className="font-semibold text-sm md:text-base">{title}</h3>
          <p className="text-xs text-gray-400">{type}</p>
        </div>
      </div>
      <p className="text-green-400 font-bold">${price}</p>
    </div>
  );
};

export default RecentOrder;
