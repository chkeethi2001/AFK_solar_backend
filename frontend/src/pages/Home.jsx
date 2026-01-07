import { useState, useEffect } from "react";
import heroImg from "../assets/hero_section.png";
import PopupRegister from "./PopupRegister.jsx";  
function Home() {
  return (
    <>
    <PopupRegister />
    <div className="w-full">

      {/* HERO SECTION */}
      <div
        className="relative w-full h-[90vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        {/* Content */}
<div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 h-[90vh]">
  <h1 className="text-5xl font-bold drop-shadow-lg">
    Powering a Sustainable Tomorrow
  </h1>

  <p className="mt-4 text-xl max-w-2xl">
    AFK EcoGrid delivers cutting-edge solar solutions to power homes,
    businesses, and industries with clean and affordable energy.
  </p>

  <a
    href="/contact"
    className="mt-6 bg-[#004225] px-8 py-3 rounded-lg text-white text-lg font-semibold shadow-lg hover:bg-green-900 transition"
  >
    Get Free Consultation
  </a>
</div>

      </div>

      {/* CONTENT SECTION */}
      <section className="py-16 bg-gray-100 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center text-[#004225]">
          AFK EcoGrid
        </h2>

        <p className="text-center max-w-3xl mx-auto mt-4 text-gray-700 text-lg">
          Hyderabad’s trusted solar service provider, offering
          end-to-end solutions from site inspection to installation and
          maintenance.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-10">
          <div className="bg-white p-8 rounded-2xl shadow-lg border hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-[#004225]">High Efficiency Panels</h3>
            <p className="mt-3 text-gray-600">
              We offer 450W–580W monocrystalline solar panels that deliver
              maximum performance even in low sunlight.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-[#004225]">Expert Installation</h3>
            <p className="mt-3 text-gray-600">
              Our skilled engineers ensure a safe, clean, and fast installation
              with premium-quality components.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-[#004225]">Smart Inverters</h3>
            <p className="mt-3 text-gray-600">
              We support on-grid, off-grid, and hybrid inverter systems with
              real-time monitoring.
            </p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

export default Home;
