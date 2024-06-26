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
            <h1 className="text-xl font-bold pl-4">Orders Details</h1>
          </div>
          <div className="p-1.5 rounded-lg font-semibold bg-violet-100 text-violet-500">
            <p>Estimated delivery:</p>
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-12 gap-4 font-bold text-gray-600">
          <div className="col-span-5">
            <p>Item Details</p>
          </div>
          <div className="col-span-2">
            <p>Tracking No</p>
          </div>
          <div className="col-span-1">
            <p>Price</p>
          </div>
          <div className="col-span-2">
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
              trackingId={item.trackingId}
              price={item.price}
              quantity={item.quantity}
              totalPrice={item.price * item.quantity}
            />
          ))}
        </div>
        <hr />
        <div class="grid grid-cols-2 gap-4 p-4 rounded-lg border bg-gray-50">
          <p class="col-span-1 text-right">Total Items:</p>
          <p class="col-span-1">{totalItems}</p>
          <p class="col-span-1 text-right">Sub Total:</p>
          <p class="col-span-1">${subTotal.toFixed(2)}</p>
          <p class="col-span-1 text-right">Applied Coupon:</p>
          <p class="col-span-1">-${coupon.toFixed(2)}</p>
          <p class="col-span-1 text-right">Delivery Fees:</p>
          <p class="col-span-1">${deliveryFee.toFixed(2)}</p>
          <p class="col-span-1 text-right">Total Saved:</p>
          <p class="col-span-1">${totalSaved.toFixed(2)}</p>
          <p class="col-span-1 text-right font-bold text-xl">Total Price:</p>
          <p class="col-span-1 font-bold text-xl">${totalPrice.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
