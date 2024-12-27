import React from "react";
import { Search, LayoutDashboard, Menu } from "lucide-react";

const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Pages", href: "#" },
    { name: "Default", href: "#" },
  ];

  return (
    <nav className="bg-white shadow-sm w-[1027px] ml-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-800 p-15 ml-10">
                    Dashboard PRO
                  </span>
                </div>
                <Menu className="h-6 w-6 text-gray-600 cursor-pointer hover:text-gray-900" />
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="flex items-center space-x-8">
            {/* Search Bar */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Type here..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Sign In Button */}
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
