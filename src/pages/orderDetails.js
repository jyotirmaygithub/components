import React from 'react'
import CheckOutBox from "../components/checkOutBox"
import User from "../components/orderDetails/user"
import OrderTracking from '../components/orderDetails/orderTrack'

export default function orderDetails() {
  return (
    <div className='flex flex-wrap'>
      <CheckOutBox/>
      <User/>
      <OrderTracking/>
    </div>
  )
}
