import React from "react";
import {
  Users,
  MousePointer,
  DollarSign,
  Package,
  ChevronUp,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import Canvas from "../../Components/Canvas/Canvas";

const StatsCard = ({ title, value, percentageChange, icon: Icon }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-600 text-sm">{title}</p>
        <h3 className="text-2xl font-semibold mt-1">{value}</h3>
      </div>
      <div
        className={`p-3 rounded-full ${
          title === "Today's Money" ? "bg-pink-100" : "bg-gray-100"
        }`}
      >
        <Icon
          className={`w-6 h-6 ${
            title === "Today's Money" ? "text-pink-600" : "text-gray-600"
          }`}
        />
      </div>
    </div>
    <div className="mt-2 flex items-center">
      <ChevronUp className="w-4 h-4 text-green-500" />
      <span className="text-green-500 text-sm ml-1">{percentageChange}</span>
    </div>
  </div>
);

const CountryRow = ({ flag, country, sales, value, bounce }) => (
  <div className="flex items-center justify-between py-3 border-b border-gray-100">
    <div className="flex items-center space-x-3">
      <span className="text-xl">{flag}</span>
      <div>
        <p className="text-sm text-gray-600">Country:</p>
        <p className="font-medium">{country}</p>
      </div>
    </div>
    <div>
      <p className="text-sm text-gray-600">Sales:</p>
      <p className="font-medium">{sales}</p>
    </div>
    <div>
      <p className="text-sm text-gray-600">Value:</p>
      <p className="font-medium">${value}</p>
    </div>
    <div>
      <p className="text-sm text-gray-600">Bounce:</p>
      <p className="font-medium">{bounce}%</p>
    </div>
  </div>
);

const Dashboard = () => {
  const chartData = [
    { name: "Apr", value: 50 },
    { name: "May", value: 90 },
    { name: "Jun", value: 300 },
    { name: "Jul", value: 220 },
    { name: "Aug", value: 500 },
    { name: "Sep", value: 250 },
    { name: "Oct", value: 400 },
    { name: "Nov", value: 230 },
    { name: "Dec", value: 500 },
  ];

  const activeUsers = [
    { title: "Users", value: "36K", icon: Users },
    { title: "Clicks", value: "2m", icon: MousePointer },
    { title: "Sales", value: "435$", icon: DollarSign },
    { title: "Items", value: "43", icon: Package },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 relative">
      {/* Dotted Globe */}
      <div className="absolute right-30 top-20 -z-10 opacity-30 pointer-events-none">
        {/* <Canvas /> */}
      </div>

      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">General Statistics</h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <StatsCard
            title="Today's Money"
            value="$53,000"
            percentageChange="+55%"
            icon={DollarSign}
          />
          <StatsCard
            title="New Clients"
            value="+3,462"
            percentageChange="-2%"
            icon={Users}
          />
          <StatsCard
            title="Today's Users"
            value="2,300"
            percentageChange="+3%"
            icon={Users}
          />
          <StatsCard
            title="Sales"
            value="$103,430"
            percentageChange="+5%"
            icon={DollarSign}
          />
        </div>

        {/* Sales by Country */}
        <div className="bg-white rounded-lg shadow-sm p-4 m-4">
          <h2 className="text-lg font-semibold mb-4">Sales by Country</h2>
          <CountryRow
            flag="🇺🇸"
            country="United States"
            sales="2500"
            value="230,900"
            bounce="29.9"
          />
          <CountryRow
            flag="🇩🇪"
            country="Germany"
            sales="3,900"
            value="440,000"
            bounce="40.22"
          />
          <CountryRow
            flag="🇬🇧"
            country="Great Britain"
            sales="1,400"
            value="190,700"
            bounce="23.44"
          />
          <CountryRow
            flag="🇧🇷"
            country="Brasil"
            sales="562"
            value="143,960"
            bounce="32.14"
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Active Users */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Active Users</h2>
            <p className="text-sm text-gray-600 mb-4">(+23%) than last week</p>
            <div className="grid grid-cols-4 gap-4 mb-6">
              {activeUsers.map((item) => (
                <div key={item.title} className="text-center">
                  <item.icon className="w-6 h-6 mx-auto mb-2 text-gray-600" />
                  <p className="text-sm font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sales Overview */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>
            <p className="text-sm text-gray-600 mb-4">4% more in 2021</p>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#E91E63"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
