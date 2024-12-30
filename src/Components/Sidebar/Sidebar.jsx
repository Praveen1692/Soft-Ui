import React, { useState } from 'react';
import { ChevronRight, Home, Car, Home as HomeIcon, Headphones, Users, LayoutDashboard, Settings, ShoppingCart, Lock } from 'lucide-react';
import {useNavigate} from 'react-router-dom'

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);
  const navigate = useNavigate()

  const dashboardItems = [
    { name: 'Default', icon: <Home size={20} /> },
    { name: 'Automotive', icon: <Car size={20} /> },
    { name: 'Smart Home', icon: <HomeIcon size={20} /> },
    { name: 'Virtual Reality', icon: <Headphones size={20} /> },
    { name: 'CRM', icon: <Users size={20} /> },
  ];

  const menuItems = [
    { name: 'Pages', icon: <LayoutDashboard size={20} /> },
    { name: 'Applications', icon: <Settings size={20} /> },
    { name: 'Ecommerce', icon: <ShoppingCart size={20} /> },
    { name: 'Authentication', icon: <Lock size={20} /> },
  ];

  return (
    <div className="w-64 bg-gray-200 text-white-800  shadow-lg">
      {/* Header */}
      <div className="flex items-center gap-2 p-5 border-b">
        <div className="p-2 border rounded-lg">
          <LayoutDashboard className="text-purple-600" size={20} />
        </div>
        <span className="font-semibold text-gray-800">Soft UI Dashboard PRO</span>
      </div>

      {/* Dashboard Section */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-fuchsia-600 rounded-lg">
              <Home className="text-white" size={20} />
            </div>
            <span className="font-medium text-gray-700">Dashboards</span>
          </div>
          <ChevronRight 
            size={20} 
            className={`text-gray-400 transform transition-transform ${expanded ? 'rotate-90' : ''}`}
            onClick={() => setExpanded(!expanded)}
          />
        </div>

        {expanded && (
          <div className="ml-4">
            {dashboardItems.map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-2 my-1 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer"
              >
                <div className="text-gray-400">{item.icon}</div>
                <span className="text-sm" onClick={(e)=>navigate('/dashboard')}>{item.name}</span>
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
          >
            <div className="text-gray-400">{item.icon}</div>
            <span className="text-sm">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;