import React from 'react';
import LandingPage from './pages/landingPage';
import OrderDetails from './pages/orderDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar';

function App() {
  return (
    <>
      <Router>
        <Routes>
          
          <Route exact path='/' element={<><NavBar /><LandingPage /></>} />
          <Route exact path='/orderDetails' element={<OrderDetails/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
