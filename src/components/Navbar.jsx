import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about" },
    { title: "Department", path: "/department" },
    { title: "Pages", path: "/pages" },
    { title: "Blog", path: "/blog" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Prevent content shift */}
      <div className="pt-[120px] md:pt-[140px]"></div>

      {/* TOP INFO BAR */}
      <div className="w-full bg-white shadow-sm border-b border-gray-200 fixed top-0 left-0 z-50 h-[60px] md:h-[70px] flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full flex items-center justify-between">

          {/* Logo (linked to home page) */}
          <NavLink to="/" className="flex items-center gap-2">
            <img
              src="/assets/images/logo/Dr.SBlogo.png"
              alt="Logo"
              className="w-56 cursor-pointer"
            />
          </NavLink>

          {/* Right Info */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-cyan-600" />
              <span className="text-gray-700 text-sm">+800-456-789</span>
            </div>

            <div className="flex items-center gap-2">
              <FaEnvelope className="text-cyan-600" />
              <span className="text-gray-700 text-sm">info@example.com</span>
            </div>

            <button className="material-bubble bg-cyan-600 hover:bg-cyan-700 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md transition-all">
              Book an Appointment
            </button>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setMobileOpen(true)} className="md:hidden text-2xl text-cyan-600">
            <FaBars />
          </button>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="w-full bg-cyan-600 shadow fixed top-[10px] md:top-[70px] left-0 z-40 h-[60px] flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full flex items-center justify-between">

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-white font-medium">
            {navItems.map((item) => (
              <NavLink
                key={item.title}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full transition-all ${
                    isActive
                      ? "bg-white text-cyan-600 shadow"
                      : "hover:bg-white/20 hover:text-gray-100"
                  }`
                }
              >
                {item.title}
              </NavLink>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-4 text-white text-lg">
            <FaFacebookF className="cursor-pointer hover:text-gray-200" />
            <FaTwitter className="cursor-pointer hover:text-gray-200" />
            <FaLinkedinIn className="cursor-pointer hover:text-gray-200" />
            <FaInstagram className="cursor-pointer hover:text-gray-200" />
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-[60] transition-opacity ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className={`fixed right-0 top-0 h-full w-72 bg-white shadow-xl p-5 transform transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Btn */}
          <button
            onClick={() => setMobileOpen(false)}
            className="text-2xl text-gray-600 absolute right-4 top-4"
          >
            <FaTimes />
          </button>

          {/* Menu */}
          <ul className="mt-12 space-y-6 text-gray-700 font-semibold text-lg">
            {navItems.map((item) => (
              <NavLink
                key={item.title}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `block transition ${
                    isActive ? "text-cyan-600 font-bold" : "hover:text-cyan-600"
                  }`
                }
              >
                {item.title}
              </NavLink>
            ))}
          </ul>

          <div className="mt-8 border-t border-gray-200 pt-5">
            <button className="w-full bg-cyan-600 text-white py-3 rounded-full font-semibold shadow-md">
              Book Appointment
            </button>

            <div className="flex justify-center gap-5 mt-5 text-cyan-600 text-xl">
              <FaFacebookF />
              <FaTwitter />
              <FaLinkedinIn />
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
