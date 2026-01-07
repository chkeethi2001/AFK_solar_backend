import React from "react";
import AboutImage from "../assets/About_section.png"; // adjust the path if needed

function About() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Header Section with Background Image */}
      <div
        className="bg-cover bg-center text-white py-20 text-center relative"
        style={{ backgroundImage: `url(${AboutImage})` }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold">About AFK EcoGrid</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg opacity-90">
            Powering Telangana with clean, reliable and affordable solar energy.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* Company Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#004225] mb-4">
            Who We Are
          </h2>
          <p className="text-lg leading-7 text-gray-700">
            AFK EcoGrid is Hyderabad's dynamic startup and authorized APN Solar franchise,
            delivering end-to-end solar panel installation services to empower Telangana
            homes, businesses, and institutions with clean, affordable energy.
            <br /><br />
            We specialize in customized on-grid and hybrid rooftop systems using high-efficiency
            solar panels (up to 580W) and inverters, backed by APN Solar's Mumbai expertise
            and ISO-certified standards.
            <br /><br />
            Our expert team ensures free site assessments, professional design using
            ARKA 360, seamless installation, and ongoing maintenance—helping customers
            achieve up to <strong>70% electricity bill reduction</strong> with long-term reliability.
          </p>
        </section>

        {/* Vision & Mission */}
        <section className="grid md:grid-cols-2 gap-12 mb-16">

          {/* Vision */}
          <div className="bg-white shadow-lg p-8 rounded-xl border-t-4 border-[#004225]">
            <h3 className="text-2xl font-semibold text-[#004225] mb-3">Our Vision</h3>
            <p className="text-gray-700 leading-7">
              To become Telangana’s most trusted and accessible solar energy provider,
              transforming rooftops into sustainable power sources and building
              a cleaner, greener future for the next generation.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white shadow-lg p-8 rounded-xl border-t-4 border-[#004225]">
            <h3 className="text-2xl font-semibold text-[#004225] mb-3">Our Mission</h3>
            <p className="text-gray-700 leading-7">
              To make solar energy affordable, reliable, and easy to adopt through
              top-quality systems, transparent service, expert engineering,
              and long-term customer support.
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#004225] mb-10 text-center">
            Why Choose AFK EcoGrid?
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-white shadow-md p-6 rounded-xl hover:scale-105 transition">
              <h4 className="text-xl font-semibold text-[#004225] mb-2">
                🔆 High-Efficiency Panels
              </h4>
              <p className="text-gray-700">
                We use top-quality monocrystalline panels up to 580W for maximum output.
              </p>
            </div>

            <div className="bg-white shadow-md p-6 rounded-xl hover:scale-105 transition">
              <h4 className="text-xl font-semibold text-[#004225] mb-2">
                ⚡ Professional Installation
              </h4>
              <p className="text-gray-700">
                Expert engineers ensure precise mounting, wiring, and safety compliance.
              </p>
            </div>

            <div className="bg-white shadow-md p-6 rounded-xl hover:scale-105 transition">
              <h4 className="text-xl font-semibold text-[#004225] mb-2">
                🛡 Long-Term Warranty
              </h4>
              <p className="text-gray-700">
                Our equipment includes industry-standard warranties for long-term peace of mind.
              </p>
            </div>

            <div className="bg-white shadow-md p-6 rounded-xl hover:scale-105 transition">
              <h4 className="text-xl font-semibold text-[#004225] mb-2">
                🧰 24/7 Support & Maintenance
              </h4>
              <p className="text-gray-700">
                We provide cleaning, repair, and real-time performance monitoring.
              </p>
            </div>

            <div className="bg-white shadow-md p-6 rounded-xl hover:scale-105 transition">
              <h4 className="text-xl font-semibold text-[#004225] mb-2">
                💰 Save Up to 70% on Bills
              </h4>
              <p className="text-gray-700">
                Our systems drastically reduce monthly electricity expenses.
              </p>
            </div>

            <div className="bg-white shadow-md p-6 rounded-xl hover:scale-105 transition">
              <h4 className="text-xl font-semibold text-[#004225] mb-2">
                🌍 Eco-Friendly Energy
              </h4>
              <p className="text-gray-700">
                Reduce your carbon footprint while enjoying clean and renewable power.
              </p>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}

export default About;
