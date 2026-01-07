import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import CommercialSolar from "./pages/CommercialSolar";
import Projects from "./pages/Projects";
import ResidentialSolar from "./pages/ResidentialSolar";
import Blog from "./pages/Blog";
// Toastr
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      {/* Toastr notifications (global) */}
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Navbar appears on all pages */}
      <Navbar />

      {/* Padding because navbar is fixed */}
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/commercial-solar" element={<CommercialSolar />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/residential-solar" element={<ResidentialSolar />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>

      {/* Footer appears on all pages */}
      <Footer />
    </Router>
  );
}

export default App;
