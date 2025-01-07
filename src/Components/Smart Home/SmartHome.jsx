import React from 'react';


const SmartHome = () => {
  
  
  return (
    <div className="p-6">
      {/* Camera Controls */}
      <div className="flex gap-4 mb-6">
        <div className="space-x-4">
          <button className="bg-white px-4 py-2 rounded-full shadow">Kitchen</button>
          <button className="bg-white px-4 py-2 rounded-full shadow">Living</button>
          <button className="bg-white px-4 py-2 rounded-full shadow">Attic</button>
        </div>
      </div>

      {/* Main Camera Feed */}
      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-3">
          <div className="relative bg-gray-800 rounded-xl overflow-hidden">
            <img src="/api/placeholder/800/450" alt="Camera Feed" className="w-full" />
            <div className="absolute top-4 left-4 text-white">
              <div className="text-sm">17.05.2021 4:34PM</div>
            </div>
            <div className="absolute top-4 right-4">
              <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm">RECORDING</span>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-4 rounded-xl text-white">
            <div className="mb-2">Weather Today</div>
            <div className="text-xl font-bold">San Francisco - 29°C</div>
            <div className="text-right">Cloudy</div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white p-4 rounded-xl shadow">
              <div className="text-4xl font-bold text-pink-500">21°C</div>
              <div>Living Room</div>
              <div className="text-sm text-gray-400">Temperature</div>
            </div>
            
            <div className="bg-white p-4 rounded-xl shadow">
              <div className="text-4xl font-bold text-pink-500">44%</div>
              <div>Outside</div>
              <div className="text-sm text-gray-400">Humidity</div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow">
              <div className="text-4xl font-bold text-pink-500">87<span className="text-xl">m³</span></div>
              <div>Water</div>
              <div className="text-sm text-gray-400">Consumption</div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow">
              <div className="text-4xl font-bold text-pink-500">417<span className="text-xl">GB</span></div>
              <div>Internet</div>
              <div className="text-sm text-gray-400">All devices</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartHome;