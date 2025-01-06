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
import Chart from "../../Components/Charts/Chart";
import Canvas from "../../Components/Canvas/Canvas";

const StatsCard = ({ title, value, percentageChange, icon: Icon }) => (
  <div
    className="relative bg-white p-2 rounded-xl shadow-sm overflow-hidden"
    style={{ width: "200px", height: "90px" }}
  >
    <div className="relative z-10">
      <div className="flex justify-between items-start mb-2">
        <div>
          <p className="text-gray-600 text-sm font-medium">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
          <span
            className={`text-sm font-medium ${
              parseInt(percentageChange) >= 0
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {percentageChange}
          </span>
        </div>
        <div
          className={`p-3 rounded-xl ${
            title === "Today's Money" ? "bg-pink-600" : "bg-violet-600"
          }`}
        >
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="flex items-center border-t pt-2 border-gray-100">
        <ChevronUp className="w-4 h-4 text-green-500" />
      </div>
    </div>
    <div className="absolute -right-6 -top-6 w-32 h-32 bg-gradient-to-br from-pink-500/30 to-violet-500/30 blur-2xl rounded-full" />
  </div>
);

const CountryRow = ({ flag, country, sales, value, bounce }) => (
  <div className="flex items-center justify-between p-2  border-b border-gray-100 shadow-sm overflow-hidden">
    <div className="flex  items-center">
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
      <div className="absolute right-30 top-20 -z-10 opacity-30 pointer-events-none"></div>

      {/*Canvas*/}
      <div className="position-relative mt-10 mb-10 ml-60 w-50 h-52 absolute inset-0  z-0">
        <Canvas />
      </div>

      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          General Statistics
        </h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
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
        <div className="bg-gray-200 rounded-lg shadow-sm p-0 mt-8 mb-6 max-w-lg shadow-sm overflow-hidden relative z-10">
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

        {/* Bar Chart */}

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Active Users */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <Chart />
            <h2 className="text-lg font-semibold mb-4">Active Users</h2>
            <p className="text-sm text-gray-600 mb-4">(+23%) than last week</p>
            <div className="grid grid-cols-4 gap-4">
              {activeUsers.map((item) => (
                <div key={item.title} className="text-center">
                  <item.icon className="w-6 h-6 mx-auto mb-2 text-gray-600 bg-pink-600" />
                  <p className="text-xl font-bold">{item.value}</p>
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
