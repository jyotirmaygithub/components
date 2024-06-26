import React from "react";

const CheckoutBox = ({
  itemImage,
  itemName,
  itemSize,
  itemColor,
  trackingId,
  price,
  quantity,
  totalPrice,
}) => {
  console.log("hey it is ",itemColor)
  return (
    <><hr /><div className="grid grid-cols-12 justify-center items-center gap-4 text-sm font-semibold">
      <div className="col-span-5 flex">
        <img
          src={itemImage}
          alt={itemName}
          className="w-16 h-16 object-cover rounded-lg" />
        <div className="ml-4">
          <p>{itemName}</p>
          <p>Size: <span className="text-gray-400">{itemSize}</span></p>
          <p>Color:  <span className="text-gray-400">{itemColor}</span></p>
        </div>
      </div>
      <div className="col-span-2">
        <p className="text-violet-400 ">{trackingId}</p>
      </div>
      <div className="col-span-1">
        <p className="f">${price}</p>
      </div>
      <div className="col-span-2">
        <p className="text-gray-600">{quantity}</p>
      </div>
      <div className="col-span-2">
        <p className="text-gray-600">${totalPrice}</p>
      </div>
    </div></>
  );
};

export default CheckoutBox;
