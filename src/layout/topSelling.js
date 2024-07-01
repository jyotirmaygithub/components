import React from "react";

const RecentOrder = ({ sNo, productName, type, stock, sales }) => {
  // using function for the mathematical commas on numbers.
  const formattedSales = new Intl.NumberFormat().format(sales);

  return (
    <tr className="bg-white">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-12 w-12">
            <img className="h-12 w-12 rounded-full object-cover" src={sNo} alt={productName} />
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">{productName}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{type}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={`${
            stock === "green" ? "text-green-400 bg-green-100" : "text-red-400 bg-red-100"
          } inline-block rounded-lg p-1 font-semibold text-xs`}
        >
          {stock === "green" ? "In Stock" : "Out of Stock"}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formattedSales}</td>
    </tr>
  );
};

export default RecentOrder;
