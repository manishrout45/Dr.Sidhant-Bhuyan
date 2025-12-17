import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Service", path: "/service" },
    { title: "Blogs", path: "/blogs" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Prevent content shift */}
      <div className="pt-[120px] md:pt-[140px]"></div>

      {/* TOP INFO BAR */}
      <div className="w-full bg-white shadow-sm border-b border-gray-200 fixed top-0 left-0 z-50 h-[60px] md:h-[70px] flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full flex items-center justify-between">
          
          {/* Logo Section */}
          <NavLink to="/" className="flex items-center gap-2 flex-nowrap">
            <img
              src="/assets/logo-2.png"
              alt="Logo 1"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
            />
            <span className="text-[14px] sm:text-[18px] md:text-[20px] font-extrabold text-gray-900 whitespace-nowrap">
              DR. SIDHANT BHUYAN
            </span>
            <img
              src="/assets/logo-1.png"
              alt="Logo 2"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
            />
          </NavLink>

          {/* Right Info */}
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-cyan-600" />
              <a
                href="tel:+919861119866"
                className="text-gray-700 text-sm hover:font-semibold"
              >
                +91 98611 19866
              </a>
            </div>

            <div className="flex items-center gap-2">
              <FaEnvelope className="text-cyan-600" />
              <a
                href="mailto:drsidhantbhuyan@gmail.com"
                className="text-gray-700 text-sm hover:font-semibold"
              >
                drsidhantbhuyan@gmail.com
              </a>
            </div>

            <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md">
              Book an Appointment
            </button>
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
      <div className="w-full bg-cyan-600 shadow fixed top-[10px] md:top-[70px] left-0 z-40 h-[60px] flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full flex items-center justify-between">
          
          {/* Nav Links */}
          <ul className="hidden md:flex gap-6 text-white font-medium">
            {navItems.map((item) => (
              <NavLink
                key={item.title}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full transition ${
                    isActive
                      ? "bg-white text-cyan-600 shadow"
                      : "hover:bg-white/20"
                  }`
                }
              >
                {item.title}
              </NavLink>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-4 text-white text-lg">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF className="hover:text-cyan-400" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
              <FaYoutube className="hover:text-cyan-400" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedinIn className="hover:text-cyan-400" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="hover:text-cyan-400" />
            </a>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 bg-black/50 z-[60] ${
          mobileOpen ? "block" : "hidden"
        }`}
      >
        <div className="fixed right-0 top-0 h-full w-72 bg-white shadow-xl p-5">
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-4 right-4 text-2xl text-gray-600"
          >
            <FaTimes />
          </button>

          <ul className="mt-12 space-y-6 text-gray-700 font-semibold text-lg">
            {navItems.map((item) => (
              <NavLink
                key={item.title}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className="block hover:text-cyan-600"
              >
                {item.title}
              </NavLink>
            ))}
          </ul>

          <div className="mt-8 border-t pt-5">
            <button className="material-bubble w-full bg-cyan-600 text-white py-3 rounded-full font-semibold">
              Book Appointment
            </button>

            <div className="flex justify-center gap-6 mt-6 text-cyan-600 text-xl">
              <a href="https://www.facebook.com/sidhant.bhuyan/" target="_blank" rel="noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://youtube.com/@dr.sidhantbhuyan?si=YZiIfa8egSaQqly9" target="_blank" rel="noreferrer">
                <FaYoutube />
              </a>
              <a href="https://www.linkedin.com/in/dr-sidhant-bhuyan-p-t-121a93118" target="_blank" rel="noreferrer">
                <FaLinkedinIn />
              </a>
              <a href="https://www.instagram.com/sidhant_bhuyan_/" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
