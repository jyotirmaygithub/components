import React from "react";
import CheckoutBox from "../layout/orderDetails/checkOutBox";

function App() {
  const items = [
    {
      itemImage: "https://via.placeholder.com/150",
      itemName: "Item 1",
      trackingId: "123456789",
      price: 29.99,
      quantity: 2,
      saved: 5.0,
      itemSize: "M",
      itemOffer : true,
      itemColor: "Red",
    },
    {
      itemImage: "https://via.placeholder.com/150",
      itemName: "Item 2",
      trackingId: "987654321",
      price: 49.99,
      quantity: 1,
      saved: 10.0,
      itemSize: "L",
      itemOffer : 23,
      itemColor: "Blue",
    },
  ];

  const coupon = 10.0;
  const deliveryFee = 5.0;

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  const subTotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const totalSaved = items.reduce((acc, item) => acc + item.saved, 0);
  const totalPrice = subTotal - coupon + deliveryFee;

  return (
    <div className="w-[900px] p-4">
      <div className="p-6 rounded-lg shadow-lg flex-col space-y-4">
        <div className="flex justify-between relative">
          <div>
            <div className="border-l-4 rounded-lg border-blue-300 h-full absolute left-0 top-0"></div>
            <h1 className="text-xl font-bold pl-4">
              Orders No - <span>{}</span>
            </h1>
          </div>
          <div className="p-1.5 rounded-lg font-semibold bg-violet-100 text-violet-500">
            <p className="text-xxs">Estimated delivery:</p>
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-11 gap-6 font-bold text-gray-600 text-sm">
          <div className="col-span-5">
            <p>Item Details</p>
          </div>
          <div className="col-span-2">
            <p>Tracking No</p>
          </div>
          <div className="col-span-1">
            <p>Price</p>
          </div>
          <div className="col-span-1">
            <p>Quantity</p>
          </div>
          <div className="col-span-2">
            <p>Total Price</p>
          </div>
        </div>
        <div className="space-y-4">
          {items.map((item, index) => (
            <CheckoutBox
              key={index}
              itemImage={item.itemImage}
              itemName={item.itemName}
              itemSize={item.itemSize}
              itemColor={item.itemColor}
              itemOffer={item.itemOffer}
              trackingId={item.trackingId}
              price={item.price}
              quantity={item.quantity}
              totalPrice={item.price * item.quantity}
            />
          ))}
        </div>
        <hr />
        <div className="flex justify-end text-sm">
          <div className="grid grid-cols-2 gap-6 p-2 font-semibold">
            <div className="text-left">Total Items:</div>
            <div>{totalItems}</div>

            <div className="text-left">Sub Total:</div>
            <div>${subTotal.toFixed(2)}</div>

            <div className="text-left">Applied Coupon:</div>
            <div className="bg-green-100 text-green-600 p-1 rounded-lg text-center">
              -${coupon.toFixed(2)}
            </div>

            <div className="text-left">Delivery Fees:</div>
            <div className="text-red-400">+${deliveryFee.toFixed(2)}</div>

            <div className="text-left">Total Saved:</div>
            <div className="text-green-500">${totalSaved.toFixed(2)}</div>

            <div className="text-left font-semibold">Total Price:</div>
            <div className="font-bold">${totalPrice.toFixed(2)}</div>
          </div>
        </div>
        <hr />
        <div className="flex justify-end">
          <div className=" flex space-x-4 font-semibold">
            <button className="bg-violet-700 text-white p-1.5 rounded flex items-center space-x-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2m-4 0v4H10v-4m0 0h4"
                />
              </svg>
              <span>Print</span>
            </button>
            <button className="bg-blue-400 text-white p-1.5 rounded flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 8a3 3 0 10-6 0v1H4a1 1 0 00-1 1v8a1 1 0 001 1h16a1 1 0 001-1v-8a1 1 0 00-1-1h-5V8zm-3-3a3 3 0 110 6 3 3 0 010-6zM7 15h10"
                />
              </svg>
              <span>Share Details</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
