import React, { useState } from "react";

export default function PhysioServices() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: "Neuro Rehabilitation",
      img: "https://img.freepik.com/free-photo/doctor-helping-patient-rehabilitation_23-2150321632.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
      desc: "Advanced neurological rehabilitation for improved mobility and independence.",
      points: [
        "Stroke (Ischemic & Hemorrhagic) Rehabilitation",
        "Traumatic Brain Injury (TBI)",
        "Spinal Cord Injury Rehabilitation",
        "Parkinson’s Disease & Multiple Sclerosis",
        "Guillain-Barré Syndrome (GBS)",
        "Cerebral Palsy (Adult & Pediatric)",
        "Post-Neurosurgery Rehabilitation",
        "Balance, Coordination & Gait Training",
      ],
      bookingLink: "/contact",
    },
    {
      title: "Orthopaedic Physiotherapy",
      img: "https://img.freepik.com/premium-photo/did-you-feel-that-shot-confident-mature-male-doctor-running-tests-patient-inside-examination-room-day_590464-24247.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
      desc: "Comprehensive care for bones, joints, muscles & post-surgical recovery.",
      points: [
        "Post-fracture & Post-operative Rehabilitation",
        "Joint Replacement Rehab (Knee, Hip, Shoulder)",
        "Frozen Shoulder & Shoulder Impingement",
        "Low Back Pain & Cervical Pain",
        "Disc Bulge / Slip Disc",
        "Osteoarthritis & Rheumatoid Arthritis",
        "Sports Injuries , Ligament & Meniscus Injuries",
      ],
      bookingLink: "/contact",
    },
    {
      title: "In-Patient Rehabilitation",
      img: "https://img.freepik.com/free-photo/practitioner-man-doctor-helping-retiree-senior-male-wheelchair-physiotherapy-strength-exercise_482257-12761.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
      desc: "Bedside and ICU-based rehabilitation for admitted patients.",
      points: [
        "Bedside Physiotherapy",
        "Early Mobilization in ICU & Ward",
        "Post-Ventilator & Post-ICU Rehabilitation",
        "Tracheostomy Care & Weaning Support",
        "Preventive Chest Physiotherapy",
        "Pressure Sore Prevention & Management",
      ],
      bookingLink: "/contact",
    },
    {
      title: "Cardio-Pulmonary Rehabilitation",
      img: "https://img.freepik.com/free-photo/scientist-researcher-preparing-woman-patient-endurance-test-attaching-electrodes-professional-body-equipment-team-doctors-monitoring-health-patinet-vo2-ekg-scan-runs-computer-screen_482257-13205.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
      desc: "Programs to improve lung capacity & cardiovascular endurance.",
      points: [
        "Chest Physiotherapy",
        "Breathing Exercises & Airway Clearance",
        "Post-COVID Rehabilitation",
        "Post-Cardiac Surgery Rehab",
        "COPD & Asthma Management",
        "Ventilator Weaning Support",
      ],
      bookingLink: "/contact",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* TITLE */}
        <h3 className="text-cyan-600 font-semibold mb-2">WHAT WE DO</h3>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our Services at Kyra Physiotherapy & Rehabilitation Centre
        </h2>

        <p className="max-w-3xl mx-auto text-gray-600 text-lg mb-16">
          Kyra Physiotherapy & Rehabilitation Centre is a comprehensive healing
          and recovery facility delivering ethical, evidence-based, and
          patient-centric care. Our multidisciplinary approach ensures safe,
          effective, and holistic rehabilitation for patients across all age
          groups.
        </p>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl shadow-lg overflow-hidden bg-white group hover:bg-cyan-600 transition-all"
            >
              {/* IMAGE */}
              <div className="h-48 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col h-[260px]">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-white">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 group-hover:text-white/90">
                  {item.desc}
                </p>

                {/* FIXED BUTTON POSITION */}
                <button
                onClick={() => setSelectedService(item)}
                className="mt-auto self-center px-6 py-2 bg-cyan-400 text-white rounded-full font-semibold
                group-hover:bg-white group-hover:text-cyan-600 transition"
                >
                Read More
                </button>

              </div>
            </div>
          ))}
        </div>

        {/* VIEW ALL SERVICES BUTTON */}
        <div className="mt-16 text-center">
          <a
            href="/service"
            className="inline-flex items-center justify-center px-12 py-4
            bg-cyan-600 text-white rounded-full font-semibold text-lg
            hover:bg-cyan-700 transition"
          >
            View All Services
          </a>
        </div>
      </div>

      {/* MODAL */}
{selectedService && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
    <div
      className="relative bg-white max-w-2xl w-full rounded-2xl overflow-hidden
      shadow-xl animate-scaleUp max-h-[90vh] flex flex-col"
    >
      {/* CLOSE */}
      <button
        onClick={() => setSelectedService(null)}
        className="absolute top-4 right-4 z-10 text-2xl font-bold text-gray-600 hover:text-red-500"
      >
        ×
      </button>

      {/* IMAGE */}
      <img
        src={selectedService.img}
        alt={selectedService.title}
        className="w-full h-48 object-cover"
      />

      {/* CONTENT (SCROLLABLE) */}
      <div className="p-6 text-left overflow-y-auto">
        <h3 className="text-2xl font-bold mb-4">
          {selectedService.title}
        </h3>

        <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6">
          {selectedService.points?.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>

        <a
          href={selectedService.bookingLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-cyan-600 text-white rounded-full font-semibold hover:bg-cyan-700 transition"
        >
          Book Appointment
        </a>
      </div>
    </div>
  </div>
)}


      {/* ANIMATION */}
      <style>
        {`
          @keyframes scaleUp {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          .animate-scaleUp {
            animation: scaleUp 0.3s ease-out;
          }
        `}
      </style>
    </section>
  );
}
