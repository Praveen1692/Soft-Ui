import React from 'react'
import { Droplets, Thermometer, Wind, Lightbulb, Wifi, Plus } from 'lucide-react';


function DeviceCard({ title, icon: Icon, isActive, lastActive, onClick }) {
  return (
    <div className={`p-6 rounded-xl shadow-sm ${isActive ? 'bg-gradient-to-br from-pink-500 to-purple-600 text-white' : 'bg-white'}`}>
    <div className="flex justify-between items-center mb-4">
      <span className="text-sm">{isActive ? 'On' : 'Off'}</span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={isActive}
          onChange={onClick}
        />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-600"></div>
      </label>
    </div>
    <div className="mb-4">
      <Icon className={`w-8 h-8 ${isActive ? 'text-white' : 'text-gray-400'}`} />
    </div>
    <h3 className={`font-medium ${isActive ? 'text-white' : 'text-gray-800'}`}>{title}</h3>
    {lastActive && (
      <p className={`text-sm mt-1 ${isActive ? 'text-white/80' : 'text-gray-500'}`}>
        Inactive since: {lastActive}
      </p>
    )}
  </div>
  )
}

export default DeviceCard