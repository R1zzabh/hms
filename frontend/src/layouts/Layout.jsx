import React from 'react'
import Navbar from "../components/Navbar.jsx";
import Sidebar from "../components/Sidebar.jsx";
import Footer from "../components/Footer.jsx";

const Layout = ({children}) => {
  return (
    <div className="layout">
      {/* Navbar */}
      <Navbar />

      <div style={{ display: "flex", minHeight: "100vh" }}>
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main style={{ flex: 1, padding: "20px", background: "#f5f6fa" }}>
          {children}
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Layout