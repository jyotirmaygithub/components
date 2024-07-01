// src/components/OrderTrackingBox.jsx

import React, { useState, useEffect } from "react";
import {
  CheckCircleIcon,
  TruckIcon,
  ShoppingCartIcon,
  CubeIcon,
} from "@heroicons/react/24/outline";

const OrderTrackingBox = ({ trackingData }) => {
  const [expandedIndexes, setExpandedIndexes] = useState([]);

  // Initialize expandedIndexes to have all indexes at the start
  useEffect(() => {
    const allIndexes = trackingData.map((_, index) => index);
    setExpandedIndexes(allIndexes);
  }, [trackingData]);

  const toggleExpand = (index) => {
    if (expandedIndexes.includes(index)) {
      // Remove index from expandedIndexes
      setExpandedIndexes(expandedIndexes.filter((item) => item !== index));
    } else {
      // Add index to expandedIndexes
      setExpandedIndexes([...expandedIndexes, index]);
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Order Placed":
        return (
          <ShoppingCartIcon className="h-7 text-white bg-blue-500 p-1 rounded-full" />
        );
      case "Picked":
        return (
          <CheckCircleIcon className="h-7 text-white bg-green-500 p-1 rounded-full" />
        );
      case "Shipping":
        return (
          <TruckIcon className="h-7 text-white bg-red-500 p-1 rounded-full" />
        );
      case "Out For Delivery":
        return (
          <CubeIcon className="h-7 text-violet-800 bg-violet-200 p-1 rounded-full" />
        );
      case "Delivered":
        return (
          <CubeIcon className="h-7 text-violet-800 bg-violet-200 p-1 rounded-full" />
        );
      default:
        return (
          <CheckCircleIcon className="h-7 text-white bg-green-500 p-1 rounded-full" />
        );
    }
  };

  return (
    <div className="w-full p-4">
      <div className="p-6 rounded-lg shadow-lg flex-col space-y-4 bg-white font-semibold">
        <div className="flex justify-between items-center relative">
          <div className="border-l-4 rounded-lg border-blue-300 h-full absolute left-0 top-0"></div>
          <h1 className="text-xl font-bold pl-4">Order Tracking</h1>
        </div>
        <hr />
        {trackingData.map((event, index) => (
          <div key={index} className="flex flex-col space-y-2 text-sm">
            <div
              className="flex items-center space-x-4 cursor-pointer"
              onClick={() => toggleExpand(index)}
            >
              {getStatusIcon(event.status)}
              <div className="flex-col justify-start">
                <p className="">{event.status}</p>
                <p
                  className={`${
                    event.status === "Order Placed" && "text-green-600"
                  } text-xs`}
                >
                  {event.date || (event.events && event.events[0].date)}
                </p>
              </div>
            </div>
            <div
              className={`pl-8 pt-2 space-y-2 ml-2 overflow-hidden transition-height duration-300 ${
                expandedIndexes.includes(index)
                  ? "h-auto max-h-[500px]"
                  : "max-h-0"
              }`}
            >
              {event.events &&
                expandedIndexes.includes(index) &&
                event.events.map((subEvent, subIndex) => (
                  <div key={subIndex}>
                    <div className="text-gray-400">{subEvent.message}</div>
                    <div className="text-gray-300 text-xs">
                      {subEvent.timestamp}
                    </div>
                  </div>
                ))}
              {!event.events && expandedIndexes.includes(index) && (
                <div>
                  <div className="text-gray-400">{event.message}</div>
                  <div className="text-gray-300 text-xs">{event.timestamp}</div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderTrackingBox;
