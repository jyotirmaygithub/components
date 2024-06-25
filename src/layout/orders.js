import React from "react";

const Orders = ({
  status,
  person,
  isOnline,
  personName,
  deliveryDate,
  price,
  productImage,
}) => {
  return (
    <>
      <hr />
      <div className="grid grid-cols-10 space-x-6 items-center relative">
        <div className="flex col-span-3 space-x-3 items-center">
          <div className="relative">
            <img
              className="w-9 h-9 rounded-full object-cover"
              src={person}
              alt={personName}
            />
            <span
              className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                isOnline ? "bg-green-500" : "bg-gray-500"
              }`}
            ></span>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-400">Name</p>
            <h3 className="font-semibold">{personName}</h3>
          </div>
        </div>
        <div className="col-span-2">
          <p className="text-sm font-semibold text-gray-400">Price</p>
          <p>${price}</p>
        </div>
        <div className="col-span-2">
          <p
            className={`text-sm font-semibold text-gray-400 ${
              (status === "completed" && "text-green-500") ||
              (status === "cancelled" && "text-red-500")
            }`}
          >
            {(status === "active" && <>Delivery Date</>) ||
              (status === "completed" && <>Delivered On</>) ||
              (status === "cancelled" && <>Cancelled Date</>)}
          </p>
          <p>{deliveryDate}</p>
        </div>
        <div className="col-span-2">
          <img
            className="w-9 h-9 rounded-full object-cover mx-auto"
            src={productImage}
            alt={personName}
          />
        </div>
        <div className="col-span-1">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Orders;
