import React from 'react';
import TopSelling from '../components/topSelling';
import RecentOrders from '../components/recentOrders';
import Orders from '../components/orders';
import MainBox from '../layout/boxContainer';
import PictureBox from '../components/dashboard/pictureBox/box';


function LandingPage() {
  return (
    <div className='App flex flex-wrap'>
      <MainBox/>
      <PictureBox/>
      <Orders/>
      <RecentOrders/>
      <TopSelling/>
    </div>
  );
}

export default LandingPage;
