import React from "react";

function Hero() {
  return (
    <section
      className="h-screen flex flex-col justify-center items-center text-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80)",
      }}
    >
      <div className="bg-black bg-opacity-60 p-10 rounded-xl">
        <h1 className="text-5xl font-bold text-white mb-6">
          Powering Telangana With Solar Energy
        </h1>
        <p className="text-gray-200 text-xl max-w-2xl">
          High-efficiency solar panels, professional installation & sustainable
          power solutions for homes and businesses.
        </p>
        <button className="mt-6 px-6 py-3 bg-[#000f89] text-white rounded hover:bg-blue-900 transition">
          Get a Free Quote
        </button>
      </div>
    </section>
  );
}

export default Hero;
