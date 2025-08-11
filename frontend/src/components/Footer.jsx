import React from 'react'
import { FaHospital } from "react-icons/fa";


export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full py-4 bg-[#0A2540] text-white flex flex-col items-center justify-center space-y-2 mt-10">
      <div className="flex items-center space-x-2 text-lg font-bold">
        <FaHospital className="text-[#60A5FA]" />
        <span>HMS</span>
      </div>
      <div className="text-sm text-center text-[#D1D5DB]">
        &copy; Hospital Management System {currentYear}
      </div>
    </footer>
  );
}