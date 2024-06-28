// src/pages/AdminPage.jsx

import React from "react";
// import UserDetailsBox from "../../layout/orderDetails/user";
import OrderTrackingBox from "../../layout/orderDetails/orderTrack";

const AdminPage = () => {
  const trackingData = [
    {
      status: "Order Placed",
      date: "Nov 03, 2022",
      message: "Order placed successfully by Sansa Taylor",
      timestamp: "Nov 03, 2022, 15:36",
    },
    {
      status: "Picked",
      date: "Nov 03, 2022",
      message: "Your order has been picked up by Smart Good Services",
      timestamp: "Nov 03, 2022, 15:36",
    },
    {
      status: "Shipping",
      events: [
        {
          date: "Nov 03, 2022",
          message: "Arrived USA SGS Warehouse",
          timestamp: "Nov 03, 2022, 15:36",
        },
        {
          date: "Nov 03, 2022",
          message: "Picked up by SGS Agent and on the way to Hyderabad",
          timestamp: "Nov 03, 2022, 15:36",
        },
        {
          date: "Nov 03, 2022",
          message: "Arrived in Hyderabad and expected Delivery is Apr 16, 2022",
          timestamp: "Nov 03, 2022, 15:36",
        },
      ],
    },
    {
      status: "Out For Delivery",
      date: "Nov 03, 2022, 15:10 (expected)",
      message: "your order is out for delivery",
      timestamp: "Nov 03, 2022, 15:36 (expected)",
    },
    {
      status: "Delivered",
      date: "Nov 03, 2022, 18:42",
      message: "",
      timestamp: "",
    },
  ];
  

  return (
    <div className="space-y-8">
      <div className="w-[500px] p-4">
      </div>
      <OrderTrackingBox trackingData={trackingData} />
    </div>
  );
};

export default AdminPage;
