import React, { useState } from "react";
import Orders from "../layout/orders"; // Assuming Orders component is in the same folder

const orders = [
  {
    person:
      "https://images.unsplash.com/photo-1712847333437-f9386beb83e4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTIzNDJ8MHwxfGFsbHx8fHx8fHx8fDE3MTkzMTQ1OTN8&ixlib=rb-4.0.3&q=85",
    personName: "arpit",
    deliveryDate: "24 May 2023",
    price: 5093,
    status: "active",
    productImage:
      "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTIzNDJ8MHwxfGFsbHx8fHx8fHx8fDE3MTkyMzA5NDV8&ixlib=rb-4.0.3&q=85",
    isOnline: true,
  },
  {
    person:
      "https://images.unsplash.com/photo-1712847333437-f9386beb83e4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTIzNDJ8MHwxfGFsbHx8fHx8fHx8fDE3MTkzMTQ1OTN8&ixlib=rb-4.0.3&q=85",
    personName: "arpit",
    deliveryDate: "24 June 2023",
    price: 5093,
    status: "cancelled",
    productImage:
      "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTIzNDJ8MHwxfGFsbHx8fHx8fHx8fDE3MTkyMzA5NDV8&ixlib=rb-4.0.3&q=85",
    isOnline: false,
  },
  {
    person:
      "https://images.unsplash.com/photo-1712847333437-f9386beb83e4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTIzNDJ8MHwxfGFsbHx8fHx8fHx8fDE3MTkzMTQ1OTN8&ixlib=rb-4.0.3&q=85",
    personName: "arpit",
    deliveryDate: "24 Feb 2023",
    price: 5093,
    status: "active",
    productImage:
      "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTIzNDJ8MHwxfGFsbHx8fHx8fHx8fDE3MTkyMzA5NDV8&ixlib=rb-4.0.3&q=85",
    isOnline: true,
  },
  {
    person:
      "https://images.unsplash.com/photo-1712847333437-f9386beb83e4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTIzNDJ8MHwxfGFsbHx8fHx8fHx8fDE3MTkzMTQ1OTN8&ixlib=rb-4.0.3&q=85",
    personName: "arpit",
    deliveryDate: "1 May 2023",
    price: 5093,
    status: "completed",
    productImage:
      "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTIzNDJ8MHwxfGFsbHx8fHx8fHx8fDE3MTkyMzA5NDV8&ixlib=rb-4.0.3&q=85",
    isOnline: false,
  },
];

export default function RecentOrders() {
  const [activeTab, setActiveTab] = useState("active");

  const filteredData = orders.filter((order) => order.status === activeTab);

  return (
    <div className="w-[700px] p-4">
      <div className="p-6 rounded-lg shadow-lg flex-col space-y-4">
        <div className="flex justify-between relative">
          <div>
            <div className="border-l-4 rounded-lg border-blue-300 h-full absolute left-0 top-0"></div>
            <h1 className="text-xl font-bold pl-4">Orders</h1>
          </div>
          <ul className="flex space-x-8 mb-3">
            <button
              className={`p-1.5 rounded-lg font-semibold ${
                activeTab === "active" && "bg-violet-100 text-violet-500"
              }`}
              onClick={() => setActiveTab("active")}
            >
              Active Orders
            </button>
            <button
              className={`p-1.5 rounded-lg font-semibold ${
                activeTab === "completed" && "bg-violet-100 text-violet-500"
              }`}
              onClick={() => setActiveTab("completed")}
            >
              Completed
            </button>
            <button
              className={`p-1.5 rounded-lg font-semibold ${
                activeTab === "cancelled" && "bg-violet-100 text-violet-500"
              }`}
              onClick={() => setActiveTab("cancelled")}
            >
              Cancelled
            </button>
          </ul>
        </div>
        <div className="space-y-4">
          {filteredData.map((order, index) => (
            <Orders
              key={index}
              status={activeTab}
              person={order.person}
              isOnline={order.isOnline}
              personName={order.personName}
              deliveryDate={order.deliveryDate}
              price={order.price}
              productImage={order.productImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
