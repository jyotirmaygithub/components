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
  itemOffer,
}) => {
  console.log("hey it is ", itemColor);
  return (
    <>
      <hr />
      <div className="grid grid-cols-11 justify-center gap-6 items-center text-sm font-semibold">
        <div className="col-span-5 flex">
          <img
            src={itemImage}
            alt={itemName}
            className="w-16 h-16 object-cover rounded-lg"
          />
          <div className="ml-4">
            <p>{itemName}</p>
            <p>
              Size: <span className="text-gray-400">{itemSize}</span>
            </p>
            <p>
              Color: <span className="text-gray-400">{itemColor}</span>
              {itemOffer  && (
                <span
                  className={`inline-block px-1 py-0.5 font-semibold rounded text-xxs ${
                    itemOffer === true
                      ? "bg-green-400 text-green-100"
                      : "bg-blue-400 text-blue-100"
                  } ml-2`}
                >
                  {itemOffer === true ? "In Offer" : `${itemOffer}% Off`}
                </span>
              )}
            </p>
          </div>
        </div>
        <div className="col-span-2">
          <p className="text-violet-400">{trackingId}</p>
        </div>
        <div className="col-span-1">
          <p className="font-semibold">${price}</p>
        </div>
        <div className="col-span-1">
          <p className="text-gray-600">{quantity}</p>
        </div>
        <div className="col-span-2">
          <p className="text-gray-600">${totalPrice}</p>
        </div>
      </div>
    </>
  );
};

export default CheckoutBox;
