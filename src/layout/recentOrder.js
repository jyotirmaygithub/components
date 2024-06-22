import React from "react";

const RecentOrder = ({ image, title, type, price }) => {
  return (
    <div className="flex justify-between items-start">
      <div className="flex">
        <img
          className="w-12 h-12 rounded-lg object-cover"
          src={image}
          alt={title}
        />
        <div className="ml-4">
          <h3 className="font-semibold">{title}</h3>
          <p className=" text-xs text-gray-400">{type}</p>
        </div>
      </div>
      <p className="text-green-400 font-bold">${price}</p>
    </div>
  );
};

export default RecentOrder;
