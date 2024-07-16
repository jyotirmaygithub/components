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
      <MainBox />
      <Earning />
      <div className='flex flex-wrap'>
        <PictureBox className='w-full md:w-1/2 lg:w-1/3' />
        <RecentOrders className='w-full md:w-1/2 lg:w-1/3' />
        <TopSelling className='w-full md:w-1/2 lg:w-1/3' />
      </div>
      <div className='flex flex-wrap'>
        <Orders className='w-full md:w-1/2 lg:w-1/3' />
        <TopCountriesSales className='w-full md:w-1/2 lg:w-1/3' />
        <TopCustomers className='w-full md:w-1/2 lg:w-1/3' />
      </div>
      <ProductsOverview />
    </div>
  );
}

export default LandingPage;
