import React from "react";

export default function PhysioServices() {
  const services = [
    {
      title: "Message Therapy",
      img: "https://img.freepik.com/free-photo/osteopathist-treating-female-patient-by-massaging-her-face_23-2148776279.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
      desc: "Helps in reducing muscle tension and promoting relaxation.",
    },
    {
      title: "Physiotherapy",
      img: "https://img.freepik.com/free-photo/chiropractor-provides-aid-patient_482257-90376.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
      desc: "Restores movement and function after injury or illness.",
    },
    {
      title: "Heat & Cold Therapy",
      img: "https://stock.imgix.net/7113?auto=compress,format&q=50&cs=adobergb1998",
      desc: "Reduces inflammation and provides long-lasting pain relief.",
    },
    {
      title: "Chiropratic Therapy",
      img: "https://img.freepik.com/free-photo/doctor-helping-patient-rehabilitation_23-2150321561.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
      desc: "Improves spinal alignment and reduces chronic pain.",
    },
    {
      title: "Work Injuries",
      img: "https://img.freepik.com/free-photo/doctor-taking-care-afro-american-child_23-2151159928.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
      desc: "Specialized care for workplace-related injuries and strains.",
    },
    {
      title: "Sport Injuries",
      img: "https://img.freepik.com/free-photo/young-physiotherapy-professional-applying-kt-tape-athlete-s-knee-hospital_662251-1704.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
      desc: "Recovery and rehabilitation for athletes of all levels.",
    },
    {
      title: "Regular Therapy",
      img: "https://img.freepik.com/free-photo/doctor-helping-patient-rehabilitation_23-2150321634.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
      desc: "Continuous therapy for chronic and long-term conditions.",
    },
    {
      title: "Back Pain",
      img: "https://img.freepik.com/free-photo/close-up-man-rubbing-his-painful-back-isolated-white-background_1150-2931.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
      desc: "Targeted treatment to relieve upper and lower back pain.",
    },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        {/* TOP TITLE */}
        <h3 className="text-cyan-600 font-semibold tracking-wide mb-2">
          WHAT WE DO
        </h3>

        <h2 className="fade-left text-4xl md:text-5xl font-bold text-gray-900 leading-snug mb-4">
          Our Service Given Physio <br /> Therapy By Expert.
        </h2>

        <p className="fade-up max-w-3xl mx-auto text-gray-600 text-lg mb-16">
          We offer a wide range of physiotherapy services to improve mobility, 
          reduce pain, and enhance overall wellness. All treatments are personalized 
          by certified physiotherapists.
        </p>

        {/* FIXED HEIGHT CARD STYLE */}
        <style>
          {`
            .service-card {
              height: 400px;
            }
            @media (min-width: 1024px) {
              .service-card {
                height: 420px;
              }
            }
          `}
        </style>

        {/* FIRST 4 CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 fade-up">
          {services.slice(0, 4).map((item, index) => (
            <div
              key={index}
              className="
                service-card rounded-2xl shadow-lg overflow-hidden bg-white
                transition-all duration-300 group hover:bg-cyan-600 hover:text-white
              "
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={item.img}
                  className="w-full h-full object-cover hover:scale-110 duration-500"
                />
              </div>

              <div className="p-6">
                <h3
                  className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-white"
                >
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-6 group-hover:text-white/90">
                  {item.desc}
                </p>

                <button
                  className="
                    px-6 py-2 font-semibold rounded-full shadow-md
                    transition-all duration-300 bg-cyan-400 text-white
                    group-hover:bg-white group-hover:text-cyan-600
                  "
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* SECOND 4 CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 fade-up">
          {services.slice(4).map((item, index) => (
            <div
              key={index}
              className="
                service-card rounded-2xl shadow-lg overflow-hidden bg-white
                transition-all duration-300 group hover:bg-cyan-400 hover:text-white
              "
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={item.img}
                  className="w-full h-full object-cover hover:scale-110 duration-500"
                />
              </div>

              <div className="p-6">
                <h3
                  className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-white"
                >
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-6 group-hover:text-white/90">
                  {item.desc}
                </p>

                <button
                  className="material-bubble 
                    px-6 py-2 bg-cyan-400 text-white font-semibold rounded-full shadow-md
                    hover:bg-cyan-600 duration-300
                    group-hover:bg-white group-hover:text-cyan-600
                  "
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
