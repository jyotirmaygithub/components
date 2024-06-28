import React from "react";
import RecentOrder from "../layout/topSelling";

const saleData = [
  {
    sNo: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTIzNDJ8MHwxfGFsbHx8fHx8fHx8fDE3MTkyMzA5NDV8&ixlib=rb-4.0.3&q=85",
    productName: "Ethnic School bag for children (24L)	",
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
    productName: "Orange smart watch with square dial (24mm)	",
    type: "Fashion",
    stock: "red",
    sales: 6890,
  },
  // Add more orders as needed
];

export default function RecentOrders() {

  return (
    <div className="w-[900px] p-4">
      <div className="p-6 rounded-lg shadow-lg flex-col space-y-4">
        <div className="flex justify-between items-center relative">
          <div className="border-l-4 rounded-lg border-blue-300 h-full absolute left-0 top-0"></div>
          <h1 className="text-xl font-bold pl-4">Top Selling Products</h1>
        </div>
        <hr />
        <div className="grid grid-cols-12 gap-4 font-bold text-gray-600">
      <div className="col-span-1">
        <p>S.no</p>
      </div>
      <div className="col-span-5">
        <p>Product Name</p>
      </div>
      <div className="col-span-2">
        <p>Category</p>
      </div>
      <div className="col-span-2">
        <p>Stock</p>
      </div>
      <div className="col-span-2">
        <p>Total Sales</p>
      </div>
    </div>
        <div className="space-y-4">
          {saleData.map((sale, index) => (
            <RecentOrder
              key={index}
              sNo={sale.sNo}
              productName={sale.productName}
              type={sale.type}
              stock={sale.stock}
              sales={sale.sales}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
