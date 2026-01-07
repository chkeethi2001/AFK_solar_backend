import React from "react";
import ResidentialImg from "../assets/Residentail_Solar.png"; // <-- your image

export default function ResidentialSolar() {
  return (
    <div>

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-green-700 to-green-500 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">
            Residential Solar Solutions
          </h1>
          <p className="text-lg max-w-2xl">
            Power your home with clean, reliable, and affordable solar energy.
            Cut your electricity bills while increasing your property value.
          </p>
        </div>
      </section>

      {/* IMAGE + TEXT */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        <img
          src={ResidentialImg}
          alt="Residential Solar"
          className="rounded-xl shadow-lg"
        />

        <div>
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Solar for Your Home
          </h2>

          <p className="text-gray-700 mb-4">
            Our residential solar systems are designed for maximum efficiency,
            aesthetics, and long-term performance. We handle everything from
            site survey to installation and maintenance.
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>Zero or very low electricity bills</li>
            <li>Government subsidies & net metering support</li>
            <li>Premium panels with long-term warranty</li>
            <li>Smart monitoring through mobile app</li>
          </ul>
        </div>
      </section>

      {/* BENEFIT CARDS */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-center text-green-700 mb-8">
            Why Choose Our Residential Solar?
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Lower Energy Bills",
              "High ROI",
              "Eco-friendly Living",
            ].map((title, i) => (
              <div key={i} className="bg-white shadow rounded-xl p-6 text-center">
                <h4 className="text-lg font-bold text-green-700 mb-3">{title}</h4>
                <p className="text-gray-600">
                  Save thousands over the years while contributing to a greener planet.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-14">
        <h3 className="text-2xl font-bold text-green-700 mb-3">
          Ready to switch to solar?
        </h3>
        <p className="text-gray-600 mb-5">
          Get a free home assessment and savings report.
        </p>
        <a
          href="/contact"
          className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:opacity-90"
        >
          Get Free Quote
        </a>
      </section>

    </div>
  );
}
