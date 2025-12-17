import React from "react";
import { FaCalendarAlt, FaStethoscope, FaUserMd, FaUserInjured,
  FaHeartbeat,
  FaHandsHelping,
  FaRunning } from "react-icons/fa";

export default function Hero() {
  return (
<section className="relative w-full bg-white pt-10 pb-24 -mt-20 sm:-mt-10 overflow-hidden">

{/* Background Shape with Image & Cyan Overlay – EXTRA WIDE */}
<div
  className="
    absolute
    top-[-110px]
    left-1/2
    -translate-x-1/2
    w-full
    h-[720px]
    rounded-b-[50%]
    z-0
    overflow-hidden
    scale-x-[1.4]
  "
>
  {/* Background Image */}
  <div
    className="
      absolute
      inset-0
      bg-[url('https://img.freepik.com/premium-photo/physiotherapy_926199-2662865.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80')]
      bg-cover
      bg-center
      bg-no-repeat
    "
  ></div>

  {/* Cyan Overlay */}
  <div className="absolute inset-0 bg-cyan-600/40"></div>
</div>



  {/* Hero Content */}
  <div className="max-w-7xl mx-auto px-4 relative z-20">

    {/* TEXT FIRST */}
    <div className="text-center max-w-3xl mx-auto">
      <span className="inline-block px-4 py-1 bg-white/10 text-white rounded-full text-sm font-semibold">
        Trusted Physiotherapy Care
      </span>

      <h1 className="text-3xl md:text-5xl font-bold mt-4 leading-tight text-white">
        Evidence-Based <br />
        <span className="text-white">
          Physiotherapy & Rehabilitation
        </span>
      </h1>

      <p className="mt-4 text-gray-200 text-sm md:text-base">
        Learn • Recover • Move Better <br />
        <span className="font-semibold">Dr. Sidhant Bhuyan (P.T)</span>
      </p>

      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <button className="material-bubble bg-cyan-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-cyan-700 transition">
          Book Appointment
        </button>

        <button className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:border-cyan-700 hover:text-cyan-700 transition">
          Call Now
        </button>
      </div>
    </div>

    {/* SERVICES = MAIN FOCUS */}
<div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

  {[
    {
      title: "Physiotherapy",
      desc: "Targeted therapy to restore movement, flexibility, and strength.",
      icon: <FaUserInjured />,
      image:
        "https://img.freepik.com/premium-photo/stretching-legs-mature-man-physiotherapist-with-fitness-clinic-physical-therapy-support-mobility-exercise-health-male-doctor-patient-help-muscle-recovery-rehabilitation_590464-420751.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
    },
    {
      title: "Rehabilitation",
      desc: "Structured recovery programs after injury or surgery.",
      icon: <FaHandsHelping />,
      image:
        "https://img.freepik.com/free-photo/medical-assistant-helping-patient-with-physiotherapy-exercises_23-2149071499.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
    },
    {
      title: "Pain Management",
      desc: "Advanced techniques to relieve chronic and acute pain.",
      icon: <FaHeartbeat />,
      image:
        "https://img.freepik.com/premium-photo/doctor-examining-patient-back_13339-18114.jpg",
    },
    {
      title: "Sports Injury Care",
      desc: "Specialized care for athletes and active individuals.",
      icon: <FaRunning />,
      image:
        "https://img.freepik.com/premium-photo/sports-injury-physiotherapy_926199-2662865.jpg",
    },
  ].map((s, i) => (
    <div
      key={i}
      className="
        group
        relative
        rounded-2xl
        overflow-hidden
        shadow-lg
        hover:shadow-2xl
        transition-all
        duration-300
      "
    >
      {/* Background Image */}
      <div
        className="h-44 bg-cover bg-center"
        style={{ backgroundImage: `url(${s.image})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-cyan-900/50 group-hover:bg-cyan-200/10 transition"></div>
      </div>

      {/* Card Content */}
      <div className="relative -mt-6 bg-white border border-cyan-700 rounded-2xl  p-6 text-center">
        <div className="
          w-14 h-14 
          mx-auto -mt-14 
          flex items-center justify-center 
          rounded-full 
          bg-cyan-600 
          text-white 
          text-2xl 
          shadow-lg
        ">
          {s.icon}
        </div>

        <h3 className="mt-4 text-lg font-semibold text-gray-800">
          {s.title}
        </h3>

        <p className="mt-2 text-sm text-gray-600">
          {s.desc}
        </p>
      </div>
    </div>
  ))}
</div>


    {/* SMALL DOCTOR IMAGE (SECONDARY) 
    <div className="mt-16 flex justify-center">
      <img
        src="/assets/images/Dr.SB.png"
        alt="Doctor"
        className="w-44 md:w-56 opacity-90"
      />
    </div>*/}
  </div>
</section>

  );
}
