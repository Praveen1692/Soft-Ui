import React from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main content container */}
      <div className="min-h-screen transition-all duration-300 md:pl-64">
        {/* Navbar */}
        <nav className="fixed top-0 right-0 left-0 md:left-64 h-16 bg-white shadow-sm z-40">
          <Navbar />
        </nav>

        {/* Main content */}
        <main className="pt-16 px-4 md:px-6">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;