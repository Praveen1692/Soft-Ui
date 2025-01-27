import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const HomePage = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="fixed top-0 left-20 h-screen w-64 bg-white shadow-lg">
        <Sidebar />
      </aside>

      {/* Main content wrapper */}
      <div className="flex-1 ml-64">
        {/* Navbar */}
        <nav className="fixed top-0 right-0 left-64 h-16 bg-white shadow-sm z-50">
          <Navbar />
        </nav>

        {/* Main content area */}
        <main className="pt-16 px-6 pb-6 min-h-screen">
          {/* Your page content goes here */}
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-semibold text-gray-800">
              This is main content under the home page
            </h1>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;