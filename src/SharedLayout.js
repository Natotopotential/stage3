import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './componets/Navbar';
import Footer from './componets/Footer';

function SharedLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default SharedLayout;
