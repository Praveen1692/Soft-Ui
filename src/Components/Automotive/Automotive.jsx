import React from "react";
import { Music, Battery, Navigation } from "lucide-react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

import Car from "../../assets/Images/car.jpg";

const Automative = () => {
  const key=import.meta.env.VITE_API_KEY;
  
  const mapStyles = {
    height: "250px",
    width: "100%",
  };

  const defaultCenter = {
    lat: 41.3851,
    lng: 2.1734,
  };
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header Section */}

      {/* Main Car Status Section */}
      <div className="bg-blue-100 rounded-xl p-8 mb-6 flex justify-between items-center">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-700">
            Since Last Charge
          </h2>

          <div className="space-y-2">
            <div>
              <div className="text-4xl font-bold">145</div>
              <div className="text-gray-600">Km</div>
            </div>

            <div>
              <div className="text-4xl font-bold">300</div>
              <div className="text-gray-600">Kw Average Energy</div>
            </div>
          </div>
        </div>

        <div className="relative h-64 lg:h-auto">
          {/* <Image
              src="/placeholder.svg"
              alt="Mercedes EQC"
              fill
              className="object-contain"
              priority
            /> */}
          <img
            src={Car}
            alt="Car"
            className="w-full fill h-full object-contain rounded-lg"
          />
        </div>

        <div className="text-right space-y-2">
          <div className="text-2xl font-semibold">Nearest Charger</div>
          <div>
            <div className="text-xl">Medan, DW</div>
            <div className="text-gray-600">891 Limarenda road</div>
          </div>
          <div className="text-3xl font-bold">
            Available Range <span className="text-blue-600">70%</span>
          </div>
        </div>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-100 p-4 rounded-xl flex justify-between items-center">
          <div>
            <div className="text-xl font-semibold">Today's Trip</div>
            <div className="text-2xl font-bold">145 Km</div>
          </div>
          <Navigation className="w-8 h-8 text-white bg-gray-800 border-2 border-gray-400  shadow-md hover:bg-gray-700 hover:border-gray-500 hover:scale-110 transition-all" />
        </div>

        <div className="bg-blue-100 p-4 rounded-xl flex justify-between items-center">
          <div>
            <div className="text-xl font-semibold">Battery Health</div>
            <div className="text-2xl font-bold">99 %</div>
          </div>
          <Battery className="w-8 h-8 text-white bg-gray-800 border-2 border-gray-400  shadow-md hover:bg-gray-700 hover:border-gray-500 hover:scale-110 transition-all" />
        </div>

        <div className="bg-blue-100 p-4 rounded-xl flex justify-between items-center">
          <div>
            <div className="text-xl font-semibold">Average Speed</div>
            <div className="text-2xl font-bold">56 Km/h</div>
          </div>
          <Navigation className="w-8 h-8 text-white bg-gray-800 border-2 border-gray-400  shadow-md hover:bg-gray-700 hover:border-gray-500 hover:scale-110 transition-all" />
        </div>

        <div className="bg-blue-100 p-4 rounded-xl flex justify-between items-center">
          <div>
            <div className="text-xl font-semibold">Music Volume</div>
            <div className="text-2xl font-bold">15/100</div>
          </div>
          <Music className="w-8 h-8 text-white bg-gray-800 border-2 border-gray-400  shadow-md hover:bg-gray-700 hover:border-gray-500 hover:scale-110 transition-all" />
        </div>
      </div>

      {/* Navigation Section */}
      <div className="bg-gray-900 text-white rounded-xl p-6">
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Search anything..."
            className="bg-transparent border-none outline-none"
          />
          <div className="flex gap-4">
            <Music className="w-6 h-6" />
            <div>10:45</div>
          </div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <div>
            <div className="text-3xl font-bold">11:13</div>
            <div className="text-gray-400">Estimated arrival time</div>
          </div>
          <div>
            <div className="text-3xl font-bold">
              2.4<span className="text-sm">Km</span>
            </div>
            <div className="text-gray-400">Turn right in 2.4 miles</div>
          </div>
          <div>
            <div className="text-3xl font-bold">
              6.3<span className="text-sm">Km</span>
            </div>
            <div className="text-gray-400">Distance to Creative Tim</div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="h-64 bg-gray-800 rounded-lg mb-4">
          {/* <img src="/api/placeholder/1200/400" alt="Map" className="w-full h-full object-cover rounded-lg" /> */}
          <LoadScript googleMapsApiKey={key}>
            <GoogleMap
              mapContainerStyle={mapStyles}
              zoom={13}
              center={defaultCenter}
            >
              <Marker position={defaultCenter} />
            </GoogleMap>
          </LoadScript>
        </div>

        {/* Music Player */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500" />
            <div>
              <div className="font-semibold">
                You're Mines Still (feat Drake)
              </div>
              <div className="text-gray-400">Yung Bleu - Hip-Hop</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-gray-800">
              <Music className="w-6 h-6" />
            </button>
            <div className="w-32 h-2 bg-gray-700 rounded-full">
              <div className="w-1/2 h-full bg-pink-500 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Automative;
