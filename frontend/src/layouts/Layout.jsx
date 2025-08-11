import React from 'react'
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { Outlet } from 'react-router-dom';

const Layout = ({children}) => {
  return (
    <div className="layout">
      {/* Navbar */}
      <Navbar />

      <div style={{ display: "flex", minHeight: "100vh" }}>
        
        {/* Main Content */}
        <main style={{ flex: 1, padding: "20px", background: "#f5f6fa" }}>
          <Outlet/>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Layout