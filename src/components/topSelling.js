import React from "react";
import TopSelling from "../layout/topSelling";

const saleData = [
  {
    sNo: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTIzNDJ8MHwxfGFsbHx8fHx8fHx8fDE3MTkyMzA5NDV8&ixlib=rb-4.0.3&q=85",
    productName: "Ethnic School bag for children (24L)",
    type: "Bags",
    stock: "green",
    sales: 5093,
  },
  {
    sNo: "https://images.unsplash.com/photo-1718762538704-9698cd001106?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTIzNDJ8MHwxfGFsbHx8fHx8fHx8fDE3MTkwNDAwNTV8&ixlib=rb-4.0.3&q=85",
    productName: "Leather jacket for men (S,M,L,XL)",
    type: "Clothing",
    stock: "green",
    sales: 6890,
  },
  {
    sNo: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTIzNDJ8MHwxfGFsbHx8fHx8fHx8fDE3MTkyMzA5NDV8&ixlib=rb-4.0.3&q=85",
    productName: "Childrens Teddy toy of high quality",
    type: "Toys",
    stock: "red",
    sales: 4534,
  },
  {
    sNo: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTIzNDJ8MHwxfGFsbHx8fHx8fHx8fDE3MTkyMzA5NDV8&ixlib=rb-4.0.3&q=85",
    productName: "Orange smart watch with square dial (24mm)",
    type: "Fashion",
    stock: "red",
    sales: 6890,
  },
  // Add more products as needed
];

export default function RecentOrders() {
  return (
    <div className=" p-4 overflow-scroll">
      <div className="p-6 rounded-lg shadow-lg">
        <h1 className="text-xl font-bold mb-4">Top Selling Products</h1>
        <table className="min-w-full divide-y divide-gray-200">
          <thead >
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                S.no
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Stock
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Sales
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {saleData.map((sale, index) => (
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
  );
}
