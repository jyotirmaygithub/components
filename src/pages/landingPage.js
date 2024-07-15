import React from 'react';
import TopSelling from '../components/topSelling';
import RecentOrders from '../components/recentOrders';
import Orders from '../components/orders';
import MainBox from '../layout/boxContainer';
import PictureBox from '../components/dashboard/pictureBox/box';
import Earning from '../components/dashboard/earning/earning';
import TopCountriesSales from '../components/dashboard/topCountries/topCountries';
import TopCustomers from '../components/dashboard/topCustomer/topcustomer';
import ProductsOverview from '../components/dashboard/productOverview/productOverview';

function LandingPage() {
  return (
    <div className='App flex flex-wrap'>
      <MainBox/>
      <PictureBox/>
      <Earning/>
      <TopCountriesSales/>
      <TopCustomers/>
      <ProductsOverview/>
      <Orders/>
      <RecentOrders/>
      <TopSelling/>
    </div>
  );
}

export default LandingPage;
