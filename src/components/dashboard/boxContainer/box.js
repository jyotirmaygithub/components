import React from 'react';

const Box = ({ title, value, percentage, bgColor, Icon }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
      <div className={`mr-4 ${bgColor} p-2 rounded-lg`}>
        <Icon className="h-8 w-8 text-white" />
      </div>
      <div>
        <h2>{title}</h2>
        <p className="text-3xl font-bold">{value}</p>
        <p className="mt-2 flex items-center">
          Increase by <span className='text-green-500 px-3 py-0.5 mx-1 rounded-lg bg-green-100'>
            {percentage}%
          </span> this month
        </p>
      </div>
    </div>
  );
};

export default Box;
