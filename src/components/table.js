import React from 'react';

const sampleData = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '555-1234', age: 28, address: '123 Main St', company: 'ABC Corp' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', phone: '555-5678', age: 34, address: '456 Elm St', company: 'XYZ Inc' },
  { id: 3, name: 'Sam Brown', email: 'sam.brown@example.com', phone: '555-8765', age: 45, address: '789 Oak St', company: 'Acme Ltd' },
  { id: 4, name: 'Alice Johnson', email: 'alice.johnson@example.com', phone: '555-4321', age: 30, address: '321 Pine St', company: 'Beta LLC' },
];

function DataTable() {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', minWidth: '600px', textAlign: 'left' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Age</th>
            <th>Address</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {sampleData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.age}</td>
              <td>{item.address}</td>
              <td>{item.company}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
