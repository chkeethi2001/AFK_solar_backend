import CommercialSolarImg from "../assets/Commercial_Solar.png";
export default function CommercialSolar() {
  return (
    <div>

      {/* HERO */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">
            Commercial & Industrial Solar Solutions
          </h1>
          <p className="max-w-3xl text-lg">
            Reduce operating costs, achieve sustainability targets, and protect your
            business from rising energy prices with high-performance solar systems.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6 text-center">
        {[
          { n: "30%+", t: "Electricity Savings" },
          { n: "5–7 yrs", t: "Typical Payback Period" },
          { n: "25 yrs", t: "System Performance Warranty" },
        ].map((item, i) => (
          <div key={i} className="bg-white shadow rounded-xl p-6">
            <p className="text-3xl font-bold text-green-700">{item.n}</p>
            <p className="text-gray-600">{item.t}</p>
          </div>
        ))}
      </section>
{/* IMAGE + TEXT */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Powering Businesses with Solar
          </h2>
          <p className="text-gray-700 mb-4">
            We design large-scale rooftop and ground-mount solar power plants for
            factories, warehouses, hospitals, schools, malls, and IT parks.
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>End-to-end EPC solutions</li>
            <li>Net metering & DISCOM approvals</li>
            <li>Remote monitoring systems</li>
            <li>O&M & long-term service contracts</li>
          </ul>
        </div>

        <img
          src={CommercialSolarImg}
          alt="commercial solar"
          className="rounded-xl shadow-lg"
        />
      </section>

      {/* CTA */}
      <section className="bg-green-600 text-white text-center py-12">
        <h3 className="text-2xl font-bold mb-3">
          Partner with us for your next solar project
        </h3>
        <p className="mb-5">Talk to our commercial solar experts today.</p>

        <a
          href="/contact"
          className="bg-white text-green-700 font-semibold px-6 py-3 rounded-lg shadow"
        >
          Request Proposal
        </a>
      </section>
    </div>
  );
}
