import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li className='bg-black text-white px-10'>
          <Link to="/orderDetails">Order Details</Link>
        </li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
}
