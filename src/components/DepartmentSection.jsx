import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { GiStethoscope } from "react-icons/gi";

export default function DepartmentSection() {
  const services = [
    ["Physical Assessment", "Manual Therapy", "Posture Correction", "Strength Training"],
    ["Electrotherapy", "Dry Needling", "Sports Rehab", "Mobility Training"],
    ["Pain Management", "Orthopedic Physio", "Neurological Physio", "Geriatric Physio"],
    ["Cardio Rehab", "Pediatric Physio", "Kinesiology Taping", "Balance Training"],
  ];

  const days = [
    "Monday 09:30 am – 18:00 pm",
    "Tuesday 09:30 am – 18:00 pm",
    "Wednesday 09:30 am – 18:00 pm",
    "Thursday 09:30 am – 18:00 pm",
    "Friday 09:30 am – 18:00 pm",
    "Saturday 09:30 am – 16:00 pm",
    "Sunday Closed",
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-14">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-2">

          {/* SECTION HEADING */}
          <div className="border-l-4 border-blue-600 pl-5 mb-8">
            <h2 className="text-4xl font-bold text-gray-900">
              Physiotherapy Department
            </h2>
            <p className="text-blue-600 font-medium mt-2 text-lg">
              Helping you recover, move, and live better
            </p>
          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Our Physiotherapy Department focuses on restoring physical strength, reducing pain, 
            improving mobility, and enhancing long-term physical health. Using evidence-based 
            therapy techniques and personalized patient care, we help you recover from injuries, 
            surgeries, chronic pain, and mobility challenges.
            <br /><br />
            Whether you're an athlete, recovering from surgery, or managing chronic pain, our 
            experienced physiotherapists ensure you get the best treatment tailored to your needs.
          </p>

          {/* SERVICES GRID */}
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((col, index) => (
              <ul key={index} className="space-y-4">
                {col.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-800">
                    <FaCheckCircle className="text-blue-500 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE WORK HOURS CARD */}
        <div className="bg-blue-600 text-white rounded-2xl shadow-2xl p-10 
                        backdrop-blur-md bg-opacity-90">

          {/* Icon */}
          <div className="flex justify-center mb-3">
            <div className="w-20 h-20 flex items-center justify-center bg-white/20 
                            rounded-full">
              <GiStethoscope className="text-4xl" />
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-center mb-6 tracking-wide">
            Working Hours
          </h3>

          {/* Working Hours List */}
          <ul className="space-y-4">
            {days.map((day, index) => {
              const dayName = day.split(" ")[0];
              const time = day.replace(dayName, "").trim();

              return (
                <li
                  key={index}
                  className="flex justify-between items-center border-b border-blue-400 pb-2"
                >
                  <span className="font-medium">{dayName}</span>
                  <span className="text-sm">{time}</span>
                </li>
              );
            })}
          </ul>
        </div>

      </div>
    </section>
  );
}
