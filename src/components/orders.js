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
    <div className="w-full max-w-4xl p-4 md:p-6 lg:p-8 mx-auto overflow-auto">
  <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col space-y-4 relative">
    <div className="flex items-center">
      <div className="border-l-4 rounded-lg border-blue-300 h-8"></div>
      <h1 className="text-xl font-bold pl-4">Orders</h1>
    </div>
    <div>
      <ul className="flex flex-wrap space-x-4 mb-3">
        <li>
          <button
            className={`p-1.5 rounded-lg font-semibold ${
              activeTab === "active" && "bg-violet-100 text-violet-500"
            }`}
            onClick={() => setActiveTab("active")}
          >
            Active Orders
          </button>
        </li>
        <li>
          <button
            className={`p-1.5 rounded-lg font-semibold ${
              activeTab === "completed" && "bg-violet-100 text-violet-500"
            }`}
            onClick={() => setActiveTab("completed")}
          >
            Completed
          </button>
        </li>
        <li>
          <button
            className={`p-1.5 rounded-lg font-semibold ${
              activeTab === "cancelled" && "bg-violet-100 text-violet-500"
            }`}
            onClick={() => setActiveTab("cancelled")}
          >
            Cancelled
          </button>
        </li>
      </ul>
    </div>
    <div className="space-y-4 overflow-auto md:overflow-visible">
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
