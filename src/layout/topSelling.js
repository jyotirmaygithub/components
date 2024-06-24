import React from "react";

const RecentOrder = ({ sNo, productName, type, stock, sales }) => {
  // using function for the mathematical commas on numbers.
  const formattedSales = new Intl.NumberFormat().format(sales);
  return (
    <>
      <hr />
      <div className="grid grid-cols-12 gap-4 items-center text-gray-600">
      <div className="col-span-1">
        <img
          className="w-12 h-12 rounded-lg object-cover"
          src={sNo}
          alt={productName}
        />
      </div>
      <div className="col-span-5">
        <h3 className="font-semibold">{productName}</h3>
      </div>
      <div className="col-span-2">
        <p className="text-xs text-gray-400">{type}</p>
      </div>
      <div className="col-span-2">
        <p
          className={`${
            stock === "green" ? "text-green-400 bg-green-100" : "text-red-400 bg-red-100"
          } inline-block rounded-lg p-1 font-semibold text-xxs`}
        >
          {stock === "green" ? "In Stock" : "Out of Stock"}
        </p>
      </div>
      <div className="col-span-2">
        <p>{formattedSales}</p>
      </div>
    </div>
    </>
  );
};

export default RecentOrder;
