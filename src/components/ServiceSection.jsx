import React from "react";
import {
  FaRunning,
  FaChild,
  FaUserNurse,
  FaWalking,
  FaDumbbell,
  FaHandHoldingHeart,
} from "react-icons/fa";

export default function ServiceSection() {
  const services = [
    {
      icon: <FaWalking />,
      title: "Musculoskeletal Therapy",
      desc: "Advanced physiotherapy for back pain, neck pain, joints & muscle injuries.",
    },
    {
      icon: <FaRunning />,
      title: "Sports Rehabilitation",
      desc: "Recovery & injury-prevention programs to restore peak athletic performance.",
    },
    {
      icon: <FaUserNurse />,
      title: "Neurological Physiotherapy",
      desc: "Care for stroke, Parkinson’s, nerve injuries & mobility disorders.",
    },
    {
      icon: <FaHandHoldingHeart />,
      title: "Post-Surgical Rehab",
      desc: "Personalized rehab after ACL, knee replacement & spine surgery.",
    },
    {
      icon: <FaChild />,
      title: "Pediatric Physiotherapy",
      desc: "Therapy for developmental delays, cerebral palsy & coordination issues.",
    },
    {
      icon: <FaDumbbell />,
      title: "Geriatric Physiotherapy",
      desc: "Pain management, balance training & mobility care for seniors.",
    },
  ];

  return (
    <section className="relative w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT – TEXT & SERVICES */}
        <div>
          <span className="inline-block mb-3 px-4 py-1 bg-cyan-600/10 text-cyan-600 rounded-full text-sm font-semibold">
            Our Expertise
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Comprehensive Physiotherapy Services
          </h2>

          <p className="mt-4 text-gray-600 max-w-xl">
            Evidence-based physiotherapy treatments designed to restore
            movement, relieve pain, and improve quality of life.
          </p>

          {/* Services List */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 
                hover:shadow-md transition"
              >
                <div className="text-cyan-600 text-2xl">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT – IMAGE */}
        <div className="relative">
          <div className="absolute -inset-4 bg-cyan-100 rounded-3xl"></div>

          <img
            src="https://img.freepik.com/premium-photo/doctor-explaining-spine-patient-office_13339-18114.jpg"
            alt="Physiotherapy Treatment"
            className="relative rounded-3xl shadow-xl w-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}
