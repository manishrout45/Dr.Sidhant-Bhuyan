import React, { useState } from "react";
import { FaCheckCircle, FaWhatsapp } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function GetAppointment() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    mobile: "",
    email: "",
    centre: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
Hello, I would like to book an appointment.

Centre: ${formData.centre}
Name: ${formData.name}
Age: ${formData.age}
Gender: ${formData.gender}
Mobile: ${formData.mobile}
Email: ${formData.email || "Not provided"}
    `;

    const whatsappURL = `https://wa.me/919861607985?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section
      id="get-appointment"
      className="w-full bg-gradient-to-br from-cyan-50 to-white py-14 md:py-20 px-4"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <h4 className="text-cyan-600 font-semibold tracking-wider uppercase flex items-center gap-2">
            Easy Appointment Process
            <span className="w-10 h-0.5 bg-cyan-600 inline-block"></span>
          </h4>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Book Your{" "}
            <span className="text-cyan-600">Appointment</span>
          </h1>

          <div className="space-y-5">
            {[
              "Choose your centre",
              "Fill your basic details",
              "Confirm instantly on WhatsApp",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <FaCheckCircle className="text-cyan-600 text-xl mt-1" />
                <p className="text-gray-600">{step}</p>
              </div>
            ))}
          </div>

          <Link
            to="/contact"
            className="inline-block bg-cyan-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-cyan-700 transition"
          >
            Need Help?
          </Link>
        </div>

        {/* RIGHT FORM CARD */}
        <div>
          <div className="bg-white rounded-3xl shadow-2xl border border-cyan-100 overflow-hidden">

            {/* HEADER */}
            <div className="flex items-center gap-4 px-6 py-5 bg-cyan-50 border-b">
              <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-cyan-600 text-white">
                <FiCalendar />
              </div>
              <div>
                <h3 className="font-bold text-lg">
                  Book Your Appointment Today
                </h3>
                <p className="text-sm text-gray-600">
                  Ask any queries in WhatsApp
                </p>
              </div>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">

              {/* CENTRE */}
              <select
                name="centre"
                required
                className="w-full border rounded-xl px-4 py-3"
                onChange={handleChange}
              >
                <option value="">Choose Centre</option>
                <option>Kyra Physiotherapy & Rehabilitation Centre</option>
                <option>Kaivalya Physiotherapy & Rehabilitation Kendra</option>
              </select>

              <input
                type="text"
                name="name"
                required
                placeholder="Full Name"
                className="w-full border rounded-xl px-4 py-3"
                onChange={handleChange}
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="number"
                  name="age"
                  required
                  placeholder="Age"
                  className="border rounded-xl px-4 py-3"
                  onChange={handleChange}
                />
                <select
                  name="gender"
                  required
                  className="border rounded-xl px-4 py-3"
                  onChange={handleChange}
                >
                  <option value="">Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              <input
                type="tel"
                name="mobile"
                required
                placeholder="Mobile Number"
                className="w-full border rounded-xl px-4 py-3"
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Email (optional)"
                className="w-full border rounded-xl px-4 py-3"
                onChange={handleChange}
              />

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition"
              >
                <FaWhatsapp className="text-xl" />
                Book via WhatsApp
              </button>

              <p className="text-xs text-center text-gray-500">
                🔒 Your details are shared only on WhatsApp
              </p>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
