import React, { useState } from "react";

export default function PhysioServices() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: "Massage Therapy",
      img: "https://img.freepik.com/free-photo/osteopathist-treating-female-patient-by-massaging-her-face_23-2148776279.jpg?w=740",
      desc: "Helps in reducing muscle tension and promoting relaxation.",
      details:
        "Massage therapy improves blood circulation, reduces stress, relieves muscle stiffness, and promotes overall physical and mental relaxation.",
      bookingLink: "https://yourclinic.setmore.com",
    },
    {
      title: "Physiotherapy",
      img: "https://img.freepik.com/free-photo/chiropractor-provides-aid-patient_482257-90376.jpg?w=740",
      desc: "Restores movement and function after injury or illness.",
      details:
        "Physiotherapy helps patients recover from injury, surgery, or chronic pain through guided exercises, manual therapy, and rehabilitation techniques.",
      bookingLink: "https://yourclinic.setmore.com",
    },
    {
      title: "Heat & Cold Therapy",
      img: "https://stock.imgix.net/7113?auto=compress,format&q=50",
      desc: "Reduces inflammation and provides long-lasting pain relief.",
      details:
        "Heat therapy relaxes muscles and improves circulation, while cold therapy reduces inflammation, swelling, and pain.",
      bookingLink: "https://yourclinic.setmore.com",
    },
    {
      title: "Chiropractic Therapy",
      img: "https://img.freepik.com/free-photo/doctor-helping-patient-rehabilitation_23-2150321561.jpg?w=740",
      desc: "Improves spinal alignment and reduces chronic pain.",
      details:
        "Chiropractic therapy focuses on spinal adjustments to improve posture, relieve nerve pressure, and enhance body alignment.",
      bookingLink: "https://yourclinic.setmore.com",
    },
    {
      title: "Work Injuries",
      img: "https://img.freepik.com/free-photo/doctor-taking-care-afro-american-child_23-2151159928.jpg?w=740",
      desc: "Specialized care for workplace-related injuries and strains.",
      details:
        "Treatment plans are designed to help patients recover safely and return to work quickly after occupational injuries.",
      bookingLink: "https://yourclinic.setmore.com",
    },
    {
      title: "Sports Injuries",
      img: "https://img.freepik.com/free-photo/young-physiotherapy-professional-applying-kt-tape-athlete-s-knee-hospital_662251-1704.jpg?w=740",
      desc: "Recovery and rehabilitation for athletes of all levels.",
      details:
        "Sports injury rehabilitation focuses on strength, flexibility, injury prevention, and performance enhancement.",
      bookingLink: "https://yourclinic.setmore.com",
    },
    {
      title: "Regular Therapy",
      img: "https://img.freepik.com/free-photo/doctor-helping-patient-rehabilitation_23-2150321634.jpg?w=740",
      desc: "Continuous therapy for chronic and long-term conditions.",
      details:
        "Regular therapy sessions help manage chronic pain, improve mobility, and enhance quality of life.",
      bookingLink: "https://yourclinic.setmore.com",
    },
    {
      title: "Back Pain Treatment",
      img: "https://img.freepik.com/free-photo/close-up-man-rubbing-his-painful-back-isolated-white-background_1150-2931.jpg?w=740",
      desc: "Targeted treatment to relieve upper and lower back pain.",
      details:
        "Back pain therapy includes posture correction, strengthening exercises, and pain management techniques.",
      bookingLink: "https://yourclinic.setmore.com",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* TITLE */}
        <h3 className="text-cyan-600 font-semibold mb-2">WHAT WE DO</h3>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our Expert Physiotherapy Services
        </h2>

        <p className="max-w-3xl mx-auto text-gray-600 text-lg mb-16">
          We provide personalized physiotherapy treatments to improve mobility,
          reduce pain, and support long-term recovery.
        </p>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl shadow-lg overflow-hidden bg-white group hover:bg-cyan-600 transition-all"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-white">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-6 group-hover:text-white/90">
                  {item.desc}
                </p>

                <button
                  onClick={() => setSelectedService(item)}
                  className="px-6 py-2 bg-cyan-400 text-white rounded-full font-semibold
                  group-hover:bg-white group-hover:text-cyan-600 transition"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="relative bg-white max-w-2xl w-full rounded-2xl overflow-hidden shadow-xl animate-scaleUp">

            {/* CLOSE */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-2xl font-bold text-gray-600 hover:text-red-500"
            >
              ×
            </button>

            {/* IMAGE */}
            <img
              src={selectedService.img}
              alt={selectedService.title}
              className="w-full h-64 object-cover"
            />

            {/* CONTENT */}
            <div className="p-6 text-left">
              <h3 className="text-2xl font-bold mb-3">
                {selectedService.title}
              </h3>

              <p className="text-gray-600 mb-6">
                {selectedService.details}
              </p>

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
