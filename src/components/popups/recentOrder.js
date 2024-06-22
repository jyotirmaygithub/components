import React, { useEffect } from "react";

export default function PopupRecentOrders({
  isDrawerOpen,
  handleDrawerClose,
  drawerRef,
}) {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target)
      ) {
        handleDrawerClose();
      }
    };

    if (isDrawerOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDrawerOpen, handleDrawerClose, drawerRef]);

  return (
    <div>
      {/* Drawer Component */}
      {isDrawerOpen && (
        <div className="fixed mt-4 -ml-6 bg-opacity-50 flex justify-center items-center z-50">
          <div
            ref={drawerRef}
            className="bg-white text-gray-500 rounded-lg shadow-lg"
          >
            <li className="hover:bg-violet-100 hover:text-violet-900 w-full px-5 p-2 list-none cursor-pointer">
              Action 
            </li>
            <li className="hover:bg-violet-100 hover:text-violet-900 w-full px-5 p-2 list-none cursor-pointer">
              Another Action
            </li>
            <li className="hover:bg-violet-100 hover:text-violet-900 w-full px-5 p-2 list-none cursor-pointer">
              Something else here
            </li>
          </div>
        </div>
      )}
    </div>
  );
}
