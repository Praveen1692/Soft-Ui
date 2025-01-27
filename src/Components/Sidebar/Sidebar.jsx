import React, { useState } from 'react';
import { 
  ChevronRight, 
  Home, 
  Car, 
  Headphones, 
  Users, 
  LayoutDashboard, 
  Settings, 
  ShoppingCart, 
  Lock,
  Menu,
  X
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navigate = useNavigate();

  const dashboardItems = [
    { name: 'Default', icon: <Home size={20} />, path: '/dashboard' },
    { name: 'Automotive', icon: <Car size={20} />, path: '/automotive' },
    { name: 'Smart Home', icon: <Home size={20} />, path: '/smart-home' },
    { name: 'Virtual Reality', icon: <Headphones size={20} />, path: '/virtual-reality' },
    { name: 'CRM', icon: <Users size={20} />, path: '/crm' },
  ];

  const menuItems = [
    { name: 'Pages', icon: <LayoutDashboard size={20} />, path: '/pages' },
    { name: 'Applications', icon: <Settings size={20} />, path: '/applications' },
    { name: 'Ecommerce', icon: <ShoppingCart size={20} />, path: '/ecommerce' },
    { name: 'Authentication', icon: <Lock size={20} />, path: '/authentication' },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileOpen(false);
  };

  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const SidebarContent = () => (
    <div className="h-full overflow-y-auto">
      {/* Header */}
      <div className="flex items-center gap-2 p-5 border-b">
        <div className="p-2 border rounded-lg">
          <LayoutDashboard className="text-purple-600" size={20} />
        </div>
        <span className="font-semibold text-gray-800">Soft UI Dashboard PRO</span>
      </div>

      {/* Dashboard Section */}
      <div className="p-4">
        <div 
          className="flex items-center justify-between mb-4 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            setExpanded(!expanded);
          }}
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-fuchsia-600 rounded-lg">
              <Home className="text-white" size={20} />
            </div>
            <span className="font-medium text-gray-700">Dashboards</span>
          </div>
          <ChevronRight
            size={20}
            className={`text-gray-400 transform transition-transform ${expanded ? 'rotate-90' : ''}`}
          />
        </div>

        {expanded && (
          <div className="ml-4">
            {dashboardItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-2 my-1 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNavigation(item.path);
                }}
              >
                <div className="text-gray-400">{item.icon}</div>
                <span className="text-sm">{item.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Pages Section */}
      <div className="p-4">
        <div className="text-xs font-semibold text-gray-400 mb-4">PAGES</div>
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-2 my-1 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              handleNavigation(item.path);
            }}
          >
            <div className="text-gray-400">{item.icon}</div>
            <span className="text-sm">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleMobileSidebar();
        }}
        className="fixed top-4 left-4 z-[60] md:hidden bg-white p-2 rounded-lg shadow-lg"
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity ${
          isMobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMobileSidebar}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <SidebarContent />
      </div>
    </>
  );
};

export default Sidebar;