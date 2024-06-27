import React from 'react'
import CheckOutBox from "../components/checkOutBox"
import User from "../components/orderDetails/user"

export default function orderDetails() {
  return (
    <div className='flex flex-wrap'>
      <CheckOutBox/>
      <User/>
    </div>
  )
}
