import React, { useState, useRef } from "react";
import RecentOrder from "../layout/recentOrder";
import { FiMoreVertical } from "react-icons/fi";
import PopupRecentOrders from "../components/popups/recentOrder";

const orders = [
  {
    image:
      "https://images.unsplash.com/photo-1718762538704-9698cd001106?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTIzNDJ8MHwxfGFsbHx8fHx8fHx8fDE3MTkwNDAwNTV8&ixlib=rb-4.0.3&q=85",
    title: "Order 1",
    type: "Type A",
    price: 29.99,
  },
  {
    image:
      "https://images.unsplash.com/photo-1718762538704-9698cd001106?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTIzNDJ8MHwxfGFsbHx8fHx8fHx8fDE3MTkwNDAwNTV8&ixlib=rb-4.0.3&q=85",
    title: "Order 2",
    type: "Type B",
    price: 39.99,
  },
  // Add more orders as needed
];

export default function RecentOrders() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerRef = useRef(null);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="w-[400px] p-4">
      <div className="p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-8 relative">
          <div className="border-l-4 rounded-lg border-blue-300 h-full absolute left-0 top-0"></div>
          <h1 className="text-xl font-bold pl-4">Recent Orders</h1>
          <div className="w-8 h-8 flex justify-center items-center bg-gray-100 rounded-lg">
            <FiMoreVertical
              onClick={handleDrawerOpen}
              className="text-gray-500 cursor-pointer"
            />
            <PopupRecentOrders
              isDrawerOpen={isDrawerOpen}
              handleDrawerClose={handleDrawerClose}
              drawerRef={drawerRef}
            />
          </div>
        </div>
        <hr />
        <div className="mt-5 space-y-4">
          {orders.map((order, index) => (
            <RecentOrder
              key={index}
              image={order.image}
              title={order.title}
              type={order.type}
              price={order.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
