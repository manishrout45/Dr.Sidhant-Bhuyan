import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";

export default function GetAppointment() {
  return (
    <section className="w-full bg-white py-12 md:py-20 px-4">
      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <h4 className="text-cyan-600 font-semibold tracking-wider uppercase flex items-center gap-2">
            Physiotherapy Care
            <span className="w-10 h-0.5 bg-cyan-600 inline-block"></span>
          </h4>

          <h1 className="fade-left text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Heal Naturally With  
            <span className="text-cyan-600"> Expert Physiotherapy</span>
          </h1>

          <p className="fade-up text-gray-600 max-w-xl">
            We provide specialized physiotherapy services to help you recover faster, reduce pain,
            improve mobility, and restore your active lifestyle with evidence-based treatments.
          </p>

          {/* FEATURES */}
          <div className="space-y-6 fade-up">
            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-cyan-600 text-2xl mt-1" />
              <div>
                <h3 className="font-bold text-lg">Pain Relief Therapy</h3>
                <p className="text-gray-600 text-sm max-w-md">
                  Advanced hands-on techniques designed to reduce chronic and acute pain effectively.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-cyan-600 text-2xl mt-1" />
              <div>
                <h3 className="font-bold text-lg">Posture & Mobility Correction</h3>
                <p className="text-gray-600 text-sm max-w-md">
                  Personalized plans to correct posture, restore movement, and prevent long-term issues.
                </p>
              </div>
            </div>
          </div>

          <button className="material-bubble bg-cyan-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-cyan-700 transition-all">
            Learn More
          </button>
        </div>

        {/* RIGHT FORM CARD */}
        <div className="bg-[#ddeefd] bg-opacity-70 backdrop-blur-lg rounded-3xl p-8 shadow-lg w-full fade-right">
          <h3 className="text-cyan-600 font-semibold uppercase tracking-wide mb-2">Book Your Session</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Get Appointment</h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <input
              type="text"
              placeholder="Full Name"
              className="border border-cyan-400 rounded-lg p-3 outline-none w-full"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="border border-cyan-400 rounded-lg p-3 outline-none w-full"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="border border-cyan-400 rounded-lg p-3 outline-none w-full"
            />

            <select className="border border-cyan-400 rounded-lg p-3 outline-none text-gray-500 w-full">
              <option>Select Therapy</option>
              <option>Sports Injury Rehab</option>
              <option>Neck & Back Pain</option>
              <option>Neurological Therapy</option>
              <option>Orthopedic Physio</option>
            </select>

            {/* DATE INPUT */}
            <div className="relative md:col-span-2">
              <input
                type="text"
                placeholder="dd-mm-yyyy"
                className="border border-cyan-400 rounded-lg p-3 w-full outline-none"
              />
              <FiCalendar className="absolute right-3 top-3 text-gray-500 text-xl" />
            </div>

            <textarea
              placeholder="Describe your concern"
              className="border border-cyan-400 rounded-lg p-3 outline-none h-32 md:col-span-2"
            ></textarea>

            <button
              type="submit"
              className="material-bubble md:col-span-2 bg-cyan-600 text-white py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-all"
            >
              BOOK NOW
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
