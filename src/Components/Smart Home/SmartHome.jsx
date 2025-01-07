import React, { useState } from 'react';
import { Cloud, Droplets, Thermometer, Wifi,Lightbulb,Wind,Plus } from 'lucide-react';


import { Bar } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)
import DeviceCard from '../DeviceCard/DeviceCard';
const SmartHome = () => {

  const [devices, setDevices] = useState({
    humidity: false,
    temperature: true,
    airConditioner: false,
    lights: false,
    wifi: true
  });
  

  const toggleDevice = (device) => {
    setDevices(prev => ({
      ...prev,
      [device]: !prev[device]
    }));
  };





  const rooms = [
    { name: 'Living Room', percentage: 15, color: 'bg-pink-500' },
    { name: 'Kitchen', percentage: 20, color: 'bg-gray-400' },
    { name: 'Attic', percentage: 13, color: 'bg-blue-400' },
    { name: 'Garage', percentage: 32, color: 'bg-green-400' },
    { name: 'Basement', percentage: 20, color: 'bg-orange-400' }
  ];

  const dailyData = [200, 150, 350, 200, 400, 180, 100];
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [150, 220, 380, 220, 400, 200, 100],
        backgroundColor: '#312e81',
        borderRadius: 8,
      },
    ],
  }
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 500,
        ticks: {
          stepSize: 100,
        },
      },
    },
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Navigation */}
        <nav className="mb-6">
          <ul className="flex space-x-4">
            <li>
              <button className="px-4 py-2 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow">
                Kitchen
              </button>
            </li>
            <li>
              <button className="px-4 py-2 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow">
                Living
              </button>
            </li>
            <li>
              <button className="px-4 py-2 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow">
                Attic
              </button>
            </li>
          </ul>
        </nav>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Camera Feed */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80" 
                alt="Living Room"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute top-4 right-4 bg-blue-100 px-3 py-1 rounded-full text-blue-600 text-sm font-medium">
                RECORDING
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm opacity-80">17.05.2021 4:34PM</p>
              </div>
            </div>
          </div>

          {/* Weather Card */}
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl shadow-lg p-6 text-white">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-medium mb-1">Weather Today</h2>
                <p className="text-2xl font-bold">San Francisco - 29°C</p>
              </div>
              <Cloud className="w-12 h-12" />
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {/* Temperature */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <Thermometer className="w-8 h-8 text-pink-500" />
              <span className="text-4xl font-bold text-pink-500">21<span className="text-2xl">°C</span></span>
            </div>
            <h3 className="font-medium text-gray-800">Living Room</h3>
            <p className="text-gray-500 text-sm">Temperature</p>
          </div>

          {/* Humidity */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <Droplets className="w-8 h-8 text-pink-500" />
              <span className="text-4xl font-bold text-pink-500">44<span className="text-2xl">%</span></span>
            </div>
            <h3 className="font-medium text-gray-800">Outside</h3>
            <p className="text-gray-500 text-sm">Humidity</p>
          </div>

          {/* Water Consumption */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <Droplets className="w-8 h-8 text-pink-500" />
              <span className="text-4xl font-bold text-pink-500">87<span className="text-2xl">m³</span></span>
            </div>
            <h3 className="font-medium text-gray-800">Water</h3>
            <p className="text-gray-500 text-sm">Consumption</p>
          </div>

          {/* Internet Usage */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <Wifi className="w-8 h-8 text-pink-500" />
              <span className="text-4xl font-bold text-pink-500">417<span className="text-2xl">GB</span></span>
            </div>
            <h3 className="font-medium text-gray-800">Internet</h3>
            <p className="text-gray-500 text-sm">All devices</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12">
        {/* Consumption by Room */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Consumption by room</h2>
          <div className="mb-4">
            <div className="text-3xl font-bold text-gray-800">471.3</div>
            <div className="text-sm text-gray-500">WATTS</div>
          </div>
          <div className="space-y-4">
            {rooms.map((room) => (
              <div key={room.name}>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full ${room.color} mr-2`}></div>
                    <span className="text-sm text-gray-600">{room.name}</span>
                  </div>
                  <span className="text-sm text-gray-600">{room.percentage}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full">
                  <div 
                    className={`h-2 rounded-full ${room.color}`}
                    style={{ width: `${room.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Consumption Chart */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Consumption per day</h2>
          <div className="flex items-end h-48 space-x-2">
          <Bar data={chartData} options={chartOptions} />

            

          </div>
        </div>

        {/* Temperature Gauge */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Device limit</h2>
          <div className="relative w-48 h-48 mx-auto">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-3xl font-bold text-gray-800">21°C</div>
            </div>
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#f3f4f6"
                strokeWidth="10"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#ec4899"
                strokeWidth="10"
                strokeDasharray="282.7"
                strokeDashoffset="200"
                transform="rotate(-90 50 50)"
              />
            </svg>
            <div className="absolute bottom-0 left-0 text-sm text-gray-500">16°C</div>
            <div className="absolute bottom-0 right-0 text-sm text-gray-500">38°C</div>
          </div>
          <div className="text-center mt-4 text-gray-600">Temperature</div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto mt-12">
      <DeviceCard
          title="Humidity"
          icon={Droplets}
          isActive={devices.humidity}
          lastActive="2 days"
          onClick={() => toggleDevice('humidity')}
        />
        <DeviceCard
          title="Temperature"
          icon={Thermometer}
          isActive={devices.temperature}
          onClick={() => toggleDevice('temperature')}
        />
        <DeviceCard
          title="Air Conditioner"
          icon={Wind}
          isActive={devices.airConditioner}
          lastActive="1 hour"
          onClick={() => toggleDevice('airConditioner')}
        />
        <DeviceCard
          title="Lights"
          icon={Lightbulb}
          isActive={devices.lights}
          lastActive="27 min"
          onClick={() => toggleDevice('lights')}
        />
        <DeviceCard
          title="Wi-fi"
          icon={Wifi}
          isActive={devices.wifi}
          onClick={() => toggleDevice('wifi')}
        />
        <button className="p-6 rounded-xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-400 hover:text-gray-600 hover:border-gray-400 transition-colors">
          <Plus className="w-8 h-8 mb-2" />
          <span className="text-sm">New device</span>
        </button>
      </div>










    </div>
  
  );
  
};

export default SmartHome;