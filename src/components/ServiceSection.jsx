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
      icon: <FaWalking className="text-4xl text-cyan-600" />,
      title: "Musculoskeletal Therapy",
      desc: "Treatment for back pain, neck pain, joint issues, and muscle injuries through advanced physiotherapy.",
    },
    {
      icon: <FaRunning className="text-4xl text-cyan-600" />,
      title: "Sports Rehabilitation",
      desc: "Injury prevention and recovery programs to help athletes safely return to peak performance.",
    },
    {
      icon: <FaUserNurse className="text-4xl text-cyan-600" />,
      title: "Neurological Physiotherapy",
      desc: "Therapy for stroke, Parkinson’s, nerve injuries, and mobility conditions to restore function.",
    },
    {
      icon: <FaHandHoldingHeart className="text-4xl text-cyan-600" />,
      title: "Post-Surgical Rehab",
      desc: "Personalized recovery plans after orthopedic surgeries like ACL, knee replacement, and spine surgery.",
    },
    {
      icon: <FaChild className="text-4xl text-cyan-600" />,
      title: "Pediatric Physiotherapy",
      desc: "Therapy for children with developmental delays, cerebral palsy, and motor coordination issues.",
    },
    {
      icon: <FaDumbbell className="text-4xl text-cyan-600" />,
      title: "Geriatric Physiotherapy",
      desc: "Treatment for seniors focusing on arthritis, balance problems, mobility issues, and chronic pain.",
    },
  ];

  return (
    <section
      className="relative w-full py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/doctor-explaining-spine-patient-office_13339-18114.jpg')" }}
    >
      {/* White Transparent Overlay */}
      <div className="absolute inset-0 bg-cyan-900/70"></div>

      <div className="relative max-w-7xl mx-auto px-4 text-center">

        {/* Heading */}
        <h2 className="fade-right text-3xl font-bold text-white">
          Physiotherapy Services
        </h2>
        <p className="fade-up text-cyan-400 mt-2 mb-14">
          Expert physiotherapy care to restore movement, strength, and well-being.
        </p>

        {/* Cards Grid */}
        <div className="fade-up grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                bg-white 
                border border-cyan-400 
                rounded-xl 
                p-8 
                shadow-sm 
                hover:shadow-lg 
                hover:scale-[1.03] 
                transition-all 
                duration-300 
                flex flex-col items-center text-center
              "
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm mt-3">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
