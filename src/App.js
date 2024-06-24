import React from "react";
import TopSelling from "./components/topSelling";
import RecentOrders from "./components/recentOrders";

function App() {
  return (
    <div className="App flex flex-wrap">
      <RecentOrders/>
      <TopSelling/>
    </div>
  );
}

export default App;
