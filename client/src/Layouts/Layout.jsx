import React from 'react'
import { Outlet } from "react-router-dom";
import Nav from './Common Layouts/Nav';
import Footer from './Common Layouts/Footer';

function Layout() {
  return (
    <>
        <Nav />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout