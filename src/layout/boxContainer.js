import React from 'react';
import Box from '../components/dashboard/boxContainer/box';
import {generalData} from '../data/data';
function App() {
  return (
    <div className="App">
      <header className="App-header grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {generalData.map((item, index) => (
          <Box 
            key={index}
            title={item.title}
            value={item.value}
            percentage={item.percentage}
            bgColor={item.bgColor}
            Icon={item.Icon}
          />
        ))}
      </header>
    </div>
  );
}

export default App;
