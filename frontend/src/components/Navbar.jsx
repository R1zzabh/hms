import React, { useState, useEffect } from "react";
import {
  FaUserPlus,
  FaUsers,
  FaCalendarCheck,
  FaFileAlt,
  FaUserMd,
  FaSignOutAlt,
  FaBars,
  FaTimes,
  FaHospital,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const NAV_ITEMS = [
  { label: "Register a Patient", icon: <FaUserPlus />, href: "/register-patient" },
  { label: "Manage Patients", icon: <FaUsers />, href: "/patients" },
  { label: "Appointments", icon: <FaCalendarCheck />, href: "/appointments" },
  { label: "Reports", icon: <FaFileAlt />, href: "/reports" },
  { label: "View Doctors", icon: <FaUserMd />, href: "/doctors" },
];

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const onEsc = (e) => {
      if (e.key === "Escape") setSidebarOpen(false);
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div
        className="flex min-[1000px]:hidden justify-between items-center px-4 py-3 backdrop-blur-md bg-white/30 border-b border-[#D1D5DB]"
        style={{ boxShadow: "0 4px 30px rgba(0,0,0,0.06)" }}
      >
        <div 
          onClick={() => navigate("/")} 
          className="flex items-center space-x-2 text-[#0A2540] font-bold text-lg cursor-pointer hover:opacity-80 transition"
        >
          <FaHospital className="text-[#1E40AF]" />
          <span>HMS</span>
        </div>

        <button
          aria-label="Open menu"
          onClick={() => setSidebarOpen(true)}
          className="text-[#0A2540] text-2xl"
        >
          <FaBars />
        </button>
      </div>

      <div
        className="hidden min-[1000px]:flex justify-between items-center px-6 py-3 backdrop-blur-md bg-white/30 border-b border-[#D1D5DB]"
        style={{ boxShadow: "0 4px 30px rgba(0,0,0,0.06)" }}
      >
        <div 
          onClick={() => navigate("/")} 
          className="flex items-center space-x-2 text-[#0A2540] font-bold text-lg cursor-pointer hover:opacity-80 transition"
        >
          <FaHospital className="text-[#1E40AF]" />
          <span>HMS</span>
        </div>

        <nav className="flex items-center space-x-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center space-x-2 text-[#0A2540] hover:text-[#1E40AF] transition-colors"
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
          <button className="bg-[#1E40AF] text-white px-4 py-2 rounded-lg hover:bg-[#3B82F6] transition-colors flex items-center space-x-2">
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.45 }}
              exit={{ opacity: 0 }}
              style={{ background: "#000" }}
              onClick={() => setSidebarOpen(false)}
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 160, damping: 20 }}
              className="fixed top-0 right-0 w-72 h-full bg-white shadow-lg z-50 flex flex-col"
            >
              <div className="flex justify-between items-center p-4 border-b border-[#D1D5DB]">
                <div className="flex items-center space-x-2 text-[#0A2540] font-bold text-lg">
                  <FaHospital className="text-[#1E40AF]" />
                  <span>HMS</span>
                </div>
                <button
                  aria-label="Close menu"
                  onClick={() => setSidebarOpen(false)}
                  className="text-[#0A2540] text-2xl"
                >
                  <FaTimes />
                </button>
              </div>

              <nav className="flex-1 p-4 space-y-4">
                {NAV_ITEMS.map((item, idx) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.06 }}
                    className="flex items-center space-x-3 text-[#0A2540] hover:text-[#1E40AF]"
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span>{item.label}</span>
                  </motion.a>
                ))}
              </nav>

              <div className="p-4 border-t border-[#D1D5DB]">
                <button className="w-full bg-[#1E40AF] text-white px-4 py-2 rounded-lg hover:bg-[#3B82F6] transition-colors flex items-center justify-center space-x-2">
                  <FaSignOutAlt />
                  <span>Logout</span>
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
