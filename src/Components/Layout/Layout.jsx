import React from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

function Layout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-screen w-64 bg-white shadow-lg md:block hidden">
        <Sidebar />
      </aside>

      {/* Main content wrapper */}
      <div className="flex-1 md:ml-64">
        {/* Navbar */}
        <nav className="fixed top-0 right-0 left-0 md:left-64 h-16 bg-white shadow-sm z-50">
          <Navbar />
        </nav>

        {/* Main content area */}
        <main className="pt-16 px-6 pb-6 min-h-screen">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}

export default Layout;
