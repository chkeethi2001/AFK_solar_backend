import React from "react";
import { 
  FaSolarPanel, 
  FaBatteryFull, 
  FaTools, 
  FaChartLine,
  FaBroom,        // For cleaning
  FaChargingStation, // For EV chargers
  FaShieldAlt     // For fencing
} from "react-icons/fa";

const Services = () => {
  return (
    <div className="bg-gray-100 min-h-screen pt-24 pb-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#004225]">
          Our Services
        </h1>
        <p className="mt-3 text-gray-600 text-lg">
          Delivering world-class solar solutions with efficiency & excellence.
        </p>
      </div>

      {/* Cards Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        
        {/* Existing services (unchanged) */}
        {/* Service 1 */}
        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300 border-t-4 border-[#004225]">
          <FaSolarPanel className="text-5xl text-[#004225] mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-center text-[#004225]">
            Solar Panel Installation
          </h2>
          <p className="text-gray-600 text-center mt-3">
            End-to-end installation of high-efficiency solar panels for homes,
            businesses & industries.
          </p>
        </div>

        {/* Service 2 */}
        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300 border-t-4 border-[#004225]">
          <FaBatteryFull className="text-5xl text-[#004225] mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-center text-[#004225]">
            Solar Battery & Storage
          </h2>
          <p className="text-gray-600 text-center mt-3">
            Reliable solar battery solutions to ensure uninterrupted power and
            maximum energy savings.
          </p>
        </div>

        {/* Service 3 */}
        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300 border-[#004225] border-t-4">
          <FaTools className="text-5xl text-[#004225] mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-center text-[#004225]">
            Maintenance & Repairs
          </h2>
          <p className="text-gray-600 text-center mt-3">
            Professional maintenance checks & quick repair services to keep your
            solar systems running efficiently.
          </p>
        </div>

        {/* Service 4 */}
        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300 border-[#004225] border-t-4">
          <FaChartLine className="text-5xl text-[#004225] mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-center text-[#004225]">
            Solar Consultation & Survey
          </h2>
          <p className="text-gray-600 text-center mt-3">
            Expert analysis & solar energy planning to help you choose the right
            system for your needs.
          </p>
        </div>

        {/* 🔹 NEW SERVICES ADDED BELOW */}

        {/* Professional Panel Cleaning */}
        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300 border-[#004225] border-t-4">
          <FaBroom className="text-5xl text-[#004225] mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-center text-[#004225]">
            Professional Panel Cleaning
          </h2>
          <p className="text-gray-600 text-center mt-3">
            Improve efficiency with safe, dust-free, professional cleaning services.
          </p>
        </div>

        {/* EV Chargers */}
        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300 border-[#004225] border-t-4">
          <FaChargingStation className="text-5xl text-[#004225] mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-center text-[#004225]">
            EV Chargers
          </h2>
          <p className="text-gray-600 text-center mt-3">
            Smart, fast, and reliable EV charging solutions for homes & businesses.
          </p>
        </div>

        {/* Solar Fencing */}
        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300 border-[#004225] border-t-4">
          <FaShieldAlt className="text-5xl text-[#004225] mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-center text-[#004225]">
            Solar Fencing
          </h2>
          <p className="text-gray-600 text-center mt-3">
            Secure properties using energy-efficient solar-powered fencing systems.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Services;
