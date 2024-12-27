import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar - Fixed at left from top */}
      <div className="fixed top-0 left-0 h-screen overflow-auto">
        <Sidebar />
      </div>

      {/* Right side content wrapper */}
      <div className="ml-64 w-full">
        {/* Navbar - Fixed at top */}
        <div className="fixed top-0 right-0 left-64 z-50">
          <Navbar />
        </div>

        {/* Main content */}
        <div className="mt-16 p-6">{/* Your page content goes here */}</div>
      </div>
    </div>
  );
};

export default HomePage;
