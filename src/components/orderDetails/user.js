// src/pages/AdminPage.jsx

import React from "react";
import UserDetailsBox from "../../layout/orderDetails/user";

const AdminPage = () => {
  const user = {
    profileImage : "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTIzNDJ8MHwxfGFsbHx8fHx8fHx8fDE3MTk0ODc4OTV8&ixlib=rb-4.0.3&q=85",
    name: "Json Taylor",
    email: "jsontaylor2135@gmail.com",
    role: "Prime User",
    address: {
      landmark: "MIG-1-11",
      street: "Monroe Street",
      city: "Georgetown",
      state: "Washington, D.C",
      country: "USA",
      zipcode: "200071",
    },
    contact: {
      phone: "(555)-0123-1210",
      email: "jsontaylor2134@gmail.com",
    },
    orderSummary: {
      date: "24, Nov 2022",
      time: "11:47AM",
      paymentInterface: "UPI",
      totalItems: "294",
    },
  };

  return (
    <div>
      <div className="w-[500px] p-4">
        <div className="p-6 rounded-lg shadow-lg flex-col space-y-4">
          <div className="flex justify-between relative">
            <div>
              <div className="border-l-4 rounded-lg border-blue-300 h-full absolute left-0 top-0"></div>
              <h1 className="text-xl font-bold pl-4">Users Details</h1>
            </div>
          </div>
          <hr />
            <UserDetailsBox user={user} />
        </div>
      </div>
      </div>
  );
};

export default AdminPage;
