import React from "react";
import TopSelling from "./components/topSelling";
import RecentOrders from "./components/recentOrders";
import Orders from "./components/orders"


function App() {
  return (
    <div className="App flex flex-wrap">
      <Orders/>
      <RecentOrders/>
      <TopSelling/>
    </div>
  );
}

export default App;
