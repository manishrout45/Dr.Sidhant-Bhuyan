import React from "react";
import { Link } from "react-router-dom";


export default function AboutUs() {
  return (
    <section className="relative py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-10">

        {/* Image */}
        <div className="flex-1 relative flex justify-center md:justify-start">
          <img
            src="/assets/images/Dr.SB2.png" // Replace with actual physiotherapy image
            alt="Physiotherapy Doctor"
            className="w-64 sm:w-80 md:w-[380px] lg:w-[450px] rounded-lg z-10"
          />

          {/* Decorative Shapes */}
          <span className="absolute top-0 left-10 w-6 h-6 bg-cyan-500 rounded-full z-0 animate-pulse"></span>
          <span className="absolute bottom-10 right-10 w-4 h-4 bg-cyan-300 rounded-full z-0 animate-bounce"></span>
          <span className="absolute top-20 right-20 w-3 h-3 bg-cyan-400 rounded-full z-0"></span>

          {/* Experience Badge */}
<div
  className="
    absolute 
    bottom-4 
    left-1/2 
    -translate-x-[20%]

    md:left-74
    md:-translate-x-0

    bg-cyan-600 
    text-white 

    px-2.5    /* very small padding */
    py-1      /* tight height */
    text-[10px]  /* small text so it stays one line on mobile */

    sm:px-3 sm:py-1.5
    sm:text-xs

    rounded-full 
    font-semibold 
    shadow-lg 
    z-20
    whitespace-nowrap   /* force single line ALWAYS */
  "
>
  Dr. Sidhant Bhuyan (PT)
</div>


        </div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-sm font-semibold text-gray-400 mb-2">ABOUT</h2>

          <h1 className="fade-right text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-snug">
            Founder – Kyra & Kaivalya Physiotherapy <br />
            <span className="text-cyan-600">& Rehabilitation Centres</span>
          </h1>

          <p className="fade-up text-gray-600 mb-6 max-w-md">
            Dr. Sidhant Bhuyan is the Founder of Kyra Physiotherapy & Rehabilitation 
            Centre and Kaivalya Physiotherapy & Rehabilitation Centre, institutions 
            dedicated to delivering world-class, evidence-based rehabilitation services. 
          </p>

          <ul className="fade-up space-y-3 mb-6 max-w-md">
            <li className="flex items-center gap-3">
              <div className="w-3 h-3 bg-cyan-600 rounded-full"></div>
              Advanced Chiropractic Care
            </li>
            <li className="flex items-center gap-3">
              <div className="w-3 h-3 bg-cyan-600 rounded-full"></div>
              Neuro, Ortho & Onco Rehabilitation
            </li>
            <li className="flex items-center gap-3">
              <div className="w-3 h-3 bg-cyan-600 rounded-full"></div>
              Paediatric & Inpatient Rehabilitation
            </li>
          </ul>

          <Link to="/about">
          <button className="material-bubble bg-cyan-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-cyan-700 transition">
            Learn More
          </button>
        </Link>

        </div>
      </div>
    </section>
  );
}
