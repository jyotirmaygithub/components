import React from "react";
import { PencilIcon } from "@heroicons/react/24/outline";

const UserDetailsBox = ({ user }) => {
  return (
    <div className="flex-col text-sm font-semibold space-y-5">
      <div className="flex justify-between ">
        <div className="flex space-x-2">
          <img
            className="w-9 h-9 rounded-full object-cover"
            src={user.profileImage}
            alt={user.name}
          />
          <div className="mb-4">
            <div className="font-normal text-gray-900">{user.name}</div>
            <div className="text-gray-400">{user.email}</div>
          </div>
        </div>
        <div>
          <p className="text-xxs bg-violet-200 text-violet-600 p-1 rounded-lg">
            {user.role}
          </p>
        </div>
      </div>
      <hr />

      {/* <div className="mb-4"> */}
      <div className="space-y-4">
        <div className="flex justify-between items-center space-x-2">
          <div>Delivery Address:</div>
          <div className="bg-violet-500 rounded-lg p-1.5">
            <PencilIcon className="h-4 text-white cursor-pointer" />
          </div>
        </div>
        <div className="space-y-2">
          <p>
            Landmark:{" "}
            <span className="text-gray-400">{user.address.landmark}</span>
          </p>
          <p>
            Street: <span className="text-gray-400">{user.address.street}</span>
          </p>
          <p>
            City: <span className="text-gray-400">{user.address.city}</span>
          </p>
          <p>
            State: <span className="text-gray-400">{user.address.state}</span>
          </p>
          <p>
            Country:{" "}
            <span className="text-gray-400">{user.address.country}</span>
          </p>
          <p>
            Zipcode:{" "}
            <span className="text-gray-400">{user.address.zipcode}</span>
          </p>
        </div>
      </div>
      {/* </div> */}

      <div className="space-y-4">
        <div>Send updates to:</div>
        <div className="space-y-2 text-gray-400">
          <p>
            Phone: <span className="font-normal">{user.contact.phone}</span>
          </p>
          <p>
            Email: <span className="font-normal">{user.contact.email}</span>
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div>Order Summary</div>
        <div className="space-y-2 text-gray-400">
          <p>
            Ordered Date:{" "}
            <span className="font-normal">{user.orderSummary.date}</span>
          </p>
          <p>
            Ordered Time:{" "}
            <span className="font-normal">{user.orderSummary.time}</span>
          </p>
          <p>
            Payment Interface:{" "}
            <span className="font-normal">
              {user.orderSummary.paymentInterface}
            </span>
          </p>
        </div>
      </div>
      <hr />
      <div className="font-normal">
        Total{" "}
        <span className="text-green-400">
          {user.orderSummary.totalItems} items
        </span>{" "}
        purchased upto now
      </div>
    </div>
  );
};

export default UserDetailsBox;
