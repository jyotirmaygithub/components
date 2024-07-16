// data.js
import {
  ArrowUpIcon,
  UserIcon,
  ShoppingBagIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/solid';

export const generalData = [
  {
    title: 'Total Sales',
    value: '14,732',
    percentage: 4.2,
    bgColor: 'bg-violet-300',
    Icon: ArrowUpIcon,
  },
  {
    title: 'New Customers',
    value: '1,230',
    percentage: 3.8,
    bgColor: 'bg-blue-300',
    Icon: UserIcon,
  },
  {
    title: 'Orders',
    value: '2,452',
    percentage: 5.1,
    bgColor: 'bg-red-300',
    Icon: ShoppingBagIcon,
  },
  {
    title: 'Revenue',
    value: '$24,532',
    percentage: 6.4,
    bgColor: 'bg-green-300',
    Icon: CurrencyDollarIcon,
  },
];

export const SalesData = [
  {
    sNo: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTIzNDJ8MHwxfGFsbHx8fHx8fHx8fDE3MTkyMzA5NDV8&ixlib=rb-4.0.3&q=85',
    productName: 'Ethnic School bag for children (24L)',
    type: 'Bags',
    stock: 'green',
    sales: 5093,
  },
  {
    sNo: 'https://images.unsplash.com/photo-1718762538704-9698cd001106?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTIzNDJ8MHwxfGFsbHx8fHx8fHx8fDE3MTkwNDAwNTV8&ixlib=rb-4.0.3&q=85',
    productName: 'Leather jacket for men (S,M,L,XL)',
    type: 'Clothing',
    stock: 'green',
    sales: 6890,
  },
  {
    sNo: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTIzNDJ8MHwxfGFsbHx8fHx8fHx8fDE3MTkyMzA5NDV8&ixlib=rb-4.0.3&q=85',
    productName: 'Childrens Teddy toy of high quality',
    type: 'Toys',
    stock: 'red',
    sales: 4534,
  },
  {
    sNo: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTIzNDJ8MHwxfGFsbHx8fHx8fHx8fDE3MTkyMzA5NDV8&ixlib=rb-4.0.3&q=85',
    productName: 'Orange smart watch with square dial (24mm)',
    type: 'Fashion',
    stock: 'red',
    sales: 6890,
  },
  // Add more products as needed
];

export const OrdersData = [
  {
    person:
      'https://images.unsplash.com/photo-1712847333437-f9386beb83e4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTIzNDJ8MHwxfGFsbHx8fHx8fHx8fDE3MTkzMTQ1OTN8&ixlib=rb-4.0.3&q=85',
    personName: 'arpit',
    deliveryDate: '24 May 2023',
    price: 5093,
    status: 'active',
    productImage:
      'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTIzNDJ8MHwxfGFsbHx8fHx8fHx8fDE3MTkyMzA5NDV8&ixlib=rb-4.0.3&q=85',
    isOnline: true,
  },
  {
    person:
      'https://images.unsplash.com/photo-1712847333437-f9386beb83e4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTIzNDJ8MHwxfGFsbHx8fHx8fHx8fDE3MTkzMTQ1OTN8&ixlib=rb-4.0.3&q=85',
    personName: 'arpit',
    deliveryDate: '24 June 2023',
    price: 5093,
    status: 'cancelled',
    productImage:
      'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTIzNDJ8MHwxfGFsbHx8fHx8fHx8fDE3MTkyMzA5NDV8&ixlib=rb-4.0.3&q=85',
    isOnline: false,
  },
  {
    person:
      'https://images.unsplash.com/photo-1712847333437-f9386beb83e4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTIzNDJ8MHwxfGFsbHx8fHx8fHx8fDE3MTkzMTQ1OTN8&ixlib=rb-4.0.3&q=85',
    personName: 'arpit',
    deliveryDate: '24 Feb 2023',
    price: 5093,
    status: 'active',
    productImage:
      'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTIzNDJ8MHwxfGFsbHx8fHx8fHx8fDE3MTkyMzA5NDV8&ixlib=rb-4.0.3&q=85',
    isOnline: true,
  },
  {
    person:
      'https://images.unsplash.com/photo-1712847333437-f9386beb83e4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTIzNDJ8MHwxfGFsbHx8fHx8fHx8fDE3MTkzMTQ1OTN8&ixlib=rb-4.0.3&q=85',
    personName: 'arpit',
    deliveryDate: '1 May 2023',
    price: 5093,
    status: 'completed',
    productImage:
      'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTIzNDJ8MHwxfGFsbHx8fHx8fHx8fDE3MTkyMzA5NDV8&ixlib=rb-4.0.3&q=85',
    isOnline: false,
  },
];

export const customers = [
  { name: 'Emma Wilson', purchases: 15, amount: 1835 },
  { name: 'Robert Lewis', purchases: 18, amount: 2415 },
  { name: 'Angelina Hose', purchases: 21, amount: 2341 },
  { name: 'Samantha Sam', purchases: 24, amount: 2624 },
];


export const products = [
  {
    name: 'Niker College Bag',
    id: '#1734-9743',
    price: 199.99,
    status: 'Available',
    sales: 3903,
    revenue: 67899.24,
  },
  {
    name: 'Dslr Camera (50mm f/1.9 HRM Lens)',
    id: '#1234-4567',
    price: 1299.99,
    status: 'Available',
    sales: 12435,
    revenue: 324781.92,
  },
  {
    name: 'Outdoor Bomber Jacket',
    id: '#1902-9883',
    price: 99.99,
    status: 'Not Available',
    sales: 5143,
    revenue: 76102.76,
  },
  {
    name: 'Light Blue Teddy',
    id: '#8745-1232',
    price: 79.00,
    status: 'Limited Deal',
    sales: 7183,
    revenue: 78211.83,
  },
  {
    name: 'Orange Smart Watch (24mm)',
    id: '#1962-9033',
    price: 199.99,
    status: 'In Offer',
    sales: 10287,
    revenue: 232982.99,
  },
];