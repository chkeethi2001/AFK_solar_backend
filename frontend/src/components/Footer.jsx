import { FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#004225] text-white pt-10 pb-6 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-3">AFK EcoGrid</h2>
          <p className="text-sm leading-6">
            Plot No 25 & 26, Padmavathi Colony<br />
            Street No 10, Near Prof GM Reddy Foundation<br />
            Uppal, Hyderabad, Telangana, 500039.
          </p>
        </div>

        {/* Quick Navigation */}
        <div>
          <h3 className="text-xl font-semibold mb-3"></h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li><a href="/about" className="hover:text-gray-300">About Us</a></li>
            <li><a href="/services" className="hover:text-gray-300">Services</a></li>
            <li><a href="/contact" className="hover:text-gray-300">Contact Us</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Connect With Us</h3>
          <div className="flex space-x-5 text-2xl">

            {/* Instagram */}
            <a
              href="https://www.instagram.com/apn_x_afk_solar_ecogrid?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaInstagram />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/16P3Kd8YKB/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaFacebook />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/afk-ecogrid-442658390"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaLinkedin />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/9963375533"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaWhatsapp />
            </a>

            {/* Email */}
            <a
              href="mailto:afkecogrid@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="text-center text-sm text-gray-300 mt-8 border-t border-gray-500 pt-4">
        © {new Date().getFullYear()} AFK EcoGrid — All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
