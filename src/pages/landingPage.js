import React from 'react';
import TopSelling from '../components/topSelling';
import RecentOrders from '../components/recentOrders';
import Orders from '../components/orders';
import MainBox from '../layout/boxContainer';
import PictureBox from '../components/dashboard/pictureBox/box';
import Earning from '../components/dashboard/earning/earning';


function LandingPage() {
  return (
    <div className='App flex flex-wrap'>
      <MainBox/>
      <PictureBox/>
      <Earning/>
      <Orders/>
      <RecentOrders/>
      <TopSelling/>
    </div>
  );
}

export default LandingPage;
