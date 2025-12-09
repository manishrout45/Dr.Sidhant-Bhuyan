import React from "react";
import { FaCalendarAlt, FaStethoscope, FaUserMd } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative w-full bg-white pt-[80px] md:pt-[40px] pb-32 overflow-hidden -mt-10">

      {/* Main Hero Content */}
      <div className="max-w-7xl mx-auto px-4 relative z-20 grid md:grid-cols-2 gap-10 items-center">

        {/* Doctor Image */}
        <div className="flex justify-center">
          <img
            src="/assets/images/Dr.SB.png"
            alt="Doctor"
            className="w-[260px] md:w-[360px] lg:w-[420px] drop-shadow-xl"
          />
        </div>

        {/* Text */}
        <div className="text-center md:text-left">
          <span className="px-4 py-1 bg-cyan-600/10 text-cyan-600 rounded-full text-sm font-semibold">
            Trusted Medical
          </span>

          <h1 className="fade-right text-3xl md:text-5xl lg:text-6xl font-bold mt-4 leading-tight text-cyan-600">
            Best Caring,
            <br />
            <span className="text-cyan-600/70">Better Doctors</span>
          </h1>

          <p className="fade-up mt-4 text-gray-600 text-sm md:text-base max-w-lg">
            Discover world-class medical services, top specialized doctors and
            advanced treatment facilities. Your health is our top priority.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="material-bubble bg-cyan-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition">
              Learn More
            </button>

            <button className="material-bubble bg-transparent border border-cyan-600 px-6 py-3 rounded-full text-cyan-600 font-semibold hover:bg-blue-50 transition">
              Call Us Now
            </button>
          </div>
        </div>
      </div>

      {/* Floating Cards */}
      <div className="relative sm:absolute sm:left-1/2 sm:bottom-[20px] sm:transform sm:-translate-x-1/2 w-full px-4 z-30 mt-10 sm:mt-0">
        <div className="max-w-5xl mx-auto bg-cyan-600 text-white rounded-2xl shadow-xl p-6 grid grid-cols-1 sm:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className="flex items-start gap-4">
            <div className="bg-white/20 p-3 rounded-xl flex items-center justify-center text-white">
              <FaCalendarAlt className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Easy Appointments</h3>
              <p className="text-white/80 text-sm">
                Book your visit with top doctors in a few clicks.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-start gap-4">
            <div className="bg-white/20 p-3 rounded-xl flex items-center justify-center text-white">
              <FaStethoscope className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Advanced Equipment</h3>
              <p className="text-white/80 text-sm">
                Latest medical technology for accurate diagnosis.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-start gap-4">
            <div className="bg-white/20 p-3 rounded-xl flex items-center justify-center text-white">
              <FaUserMd className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Caring Professionals</h3>
              <p className="text-white/80 text-sm">
                Experienced doctors & compassionate staff.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ⚫ EXACT SAME HALF-CIRCLE AS YOUR IMAGE */}
      <div className="absolute top-[-60px] left-1/2 -translate-x-1/2 
                w-[200%] h-[750px] bg-cyan-100 rounded-[50%] z-0 "></div>


    </section>
  );
}
