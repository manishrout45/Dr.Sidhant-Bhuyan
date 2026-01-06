import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaUserShield,
} from "react-icons/fa";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [mobilePagesOpen, setMobilePagesOpen] = useState(false);

  const location = useLocation();

  const isPagesActive =
    location.pathname === "/kyra-physiotherapy-centre" ||
    location.pathname === "/kaivalya-physiotherapy-kendra";

  useEffect(() => {
    if (isPagesActive) setPagesOpen(true);
  }, [isPagesActive]);

  return (
    <>
      {/* Spacer */}
      <div className="pt-[120px] md:pt-[140px]" />

      {/* TOP INFO BAR */}
      <div className="w-full bg-white shadow-sm border-b fixed top-0 left-0 z-50 h-[60px] md:h-[70px] flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2">
            <img src="/assets/logo-2.png" className="w-12 h-12 object-contain" />
            <span className="text-lg md:text-xl font-extrabold">
              DR. SIDHANT BHUYAN
            </span>
            <img src="/assets/logo-1.png" className="w-12 h-12 object-contain" />
          </NavLink>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-cyan-600" />
              <a href="tel:+919861607985" className="text-sm">
                +91 98616 07985
              </a>
            </div>

            <div className="flex items-center gap-2">
              <FaEnvelope className="text-cyan-600" />
              <a href="mailto:sidhantbhuyan1000@gmail.com" className="text-sm">
                sidhantbhuyan1000@gmail.com
              </a>
            </div>

            <Link
              to="/contact"
              className="bg-cyan-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-cyan-700"
            >
              Book Appointment
            </Link>

            <Link
              to="/admin/login"
              className="flex items-center gap-2 border border-cyan-600 text-cyan-600 px-4 py-2 rounded-full hover:bg-cyan-600 hover:text-white"
            >
              <FaUserShield />
              Admin
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden text-3xl text-cyan-600"
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="w-full bg-cyan-600 fixed top-[10px] md:top-[70px] left-0 z-40 h-[60px] flex items-center shadow">
        <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-center">
          {/* Desktop Menu (UNCHANGED) */}
          <ul className="hidden md:flex gap-6 text-white font-medium items-center">
            <NavLink to="/" className={({ isActive }) =>
              `px-4 py-2 rounded-full ${isActive ? "bg-white text-cyan-600 shadow" : "hover:bg-white/20"}`
            }>
              Home
            </NavLink>

            <NavLink to="/about" className={({ isActive }) =>
              `px-4 py-2 rounded-full ${isActive ? "bg-white text-cyan-600 shadow" : "hover:bg-white/20"}`
            }>
              About
            </NavLink>

            <NavLink to="/service" className={({ isActive }) =>
              `px-4 py-2 rounded-full ${isActive ? "bg-white text-cyan-600 shadow" : "hover:bg-white/20"}`
            }>
              Service
            </NavLink>

            {/* Pages */}
            <li
              className="relative"
              onMouseEnter={() => setPagesOpen(true)}
              onMouseLeave={() => setPagesOpen(false)}
            >
              <button
                className={`px-4 py-2 rounded-full flex items-center gap-1 ${
                  isPagesActive
                    ? "bg-white text-cyan-600 shadow"
                    : "hover:bg-white/20"
                }`}
              >
                Pages
                <span className={`transition-transform ${pagesOpen ? "rotate-180" : ""}`}>
                  ▾
                </span>
              </button>

              <ul
                className={`absolute top-12 left-0 bg-white text-gray-800 rounded-lg shadow-lg w-64 overflow-hidden
                transition-all duration-300 ${
                  pagesOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <Link to="/kyra-physiotherapy-centre" className="block px-5 py-3 hover:bg-gray-100">
                  Kyra Physiotherapy Centre
                </Link>
                <Link to="/kaivalya-physiotherapy-kendra" className="block px-5 py-3 hover:bg-gray-100">
                  Kaivalya Physiotherapy Kendra
                </Link>
              </ul>
            </li>

            <NavLink to="/testimonials" className={({ isActive }) =>
              `px-4 py-2 rounded-full ${isActive ? "bg-white text-cyan-600 shadow" : "hover:bg-white/20"}`
            }>
              Testimonials
            </NavLink>

            <NavLink to="/blogs" className={({ isActive }) =>
              `px-4 py-2 rounded-full ${isActive ? "bg-white text-cyan-600 shadow" : "hover:bg-white/20"}`
            }>
              Blogs
            </NavLink>

            <NavLink to="/contact" className={({ isActive }) =>
              `px-4 py-2 rounded-full ${isActive ? "bg-white text-cyan-600 shadow" : "hover:bg-white/20"}`
            }>
              Contact
            </NavLink>
          </ul>

          {/* Social Icons */}
          <div className="hidden md:flex gap-4 text-white text-lg">
            <FaFacebookF />
            <FaYoutube />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div>
      </div>

      {/* MOBILE MENU (RESTORED & FIXED) */}
      <div
        className={`fixed inset-0 z-[60] bg-black/50 transition-opacity ${
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`fixed top-0 right-0 h-full w-72 bg-white p-5 shadow-xl transform transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-4 right-4 text-2xl"
          >
            <FaTimes />
          </button>

          <ul className="mt-12 space-y-6 font-semibold text-lg">
            <NavLink to="/" onClick={() => setMobileOpen(false)} className="block">
              Home
            </NavLink>
            <NavLink to="/about" onClick={() => setMobileOpen(false)} className="block">
              About
            </NavLink>
            <NavLink to="/service" onClick={() => setMobileOpen(false)} className="block">
              Service
            </NavLink>

            {/* Mobile Pages */}
            <div>
              <button
                onClick={() => setMobilePagesOpen(!mobilePagesOpen)}
                className="w-full flex justify-between items-center"
              >
                Pages
                <span className={`transition-transform ${mobilePagesOpen ? "rotate-180" : ""}`}>
                  ▾
                </span>
              </button>

              <div
                className={`ml-4 overflow-hidden transition-all duration-300 ${
                  mobilePagesOpen ? "max-h-40 mt-3" : "max-h-0"
                }`}
              >
                <NavLink
                  to="/kyra-physiotherapy-centre"
                  onClick={() => setMobileOpen(false)}
                  className="block mt-2"
                >
                  Kyra Physiotherapy Centre
                </NavLink>
                <NavLink
                  to="/kaivalya-physiotherapy-kendra"
                  onClick={() => setMobileOpen(false)}
                  className="block mt-2"
                >
                  Kaivalya Physiotherapy Kendra
                </NavLink>
              </div>
            </div>

            <NavLink to="/testimonials" onClick={() => setMobileOpen(false)} className="block">
              Testimonials
            </NavLink>
            <NavLink to="/blogs" onClick={() => setMobileOpen(false)} className="block">
              Blogs
            </NavLink>
            <NavLink to="/contact" onClick={() => setMobileOpen(false)} className="block">
              Contact
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
}
