import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";

export default function GetAppointment() {
  return (
    <section className="w-full bg-gradient-to-br from-cyan-50 to-white py-14 md:py-20 px-4">
      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
<div className="space-y-6">
  <h4 className="text-cyan-600 font-semibold tracking-wider uppercase flex items-center gap-2">
    Easy Appointment Process
    <span className="w-10 h-0.5 bg-cyan-600 inline-block"></span>
  </h4>

  <h1 className="fade-left text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
    Book Your Appointment  
    <span className="text-cyan-600"> In 3 Simple Steps</span>
  </h1>

  <p className="fade-up text-gray-600 max-w-xl">
    Schedule your physiotherapy consultation easily. Just select the treatment you
    need, choose the right doctor, and confirm your appointment in minutes.
  </p>

  {/* STEPS */}
  <div className="space-y-6 fade-up">

    {/* STEP 1 */}
    <div className="flex items-start gap-3">
      <FaCheckCircle className="text-cyan-600 text-2xl mt-1" />
      <div>
        <h3 className="font-bold text-lg">
          Step 1: Choose Your Therapy
        </h3>
        <p className="text-gray-600 text-sm max-w-md">
          Select the physiotherapy service you require, such as pain relief,
          sports injury rehabilitation, or posture correction.
        </p>
      </div>
    </div>

    {/* STEP 2 */}
    <div className="flex items-start gap-3">
      <FaCheckCircle className="text-cyan-600 text-2xl mt-1" />
      <div>
        <h3 className="font-bold text-lg">
          Step 2: Select Your Doctor from team
        </h3>
        <p className="text-gray-600 text-sm max-w-md">
          Choose a qualified doctor from the relevant department based on
          availability and expertise.
        </p>
      </div>
    </div>

    {/* STEP 3 */}
    <div className="flex items-start gap-3">
      <FaCheckCircle className="text-cyan-600 text-2xl mt-1" />
      <div>
        <h3 className="font-bold text-lg">
          Step 3: Fill Details & Confirm
        </h3>
        <p className="text-gray-600 text-sm max-w-md">
          Enter your contact details, select a suitable date and time,
          and submit the form to confirm your appointment.
        </p>
      </div>
    </div>

  </div>

  <button className="material-bubble bg-cyan-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-cyan-700 transition-all">
    Book Appointment
  </button>
</div>


       {/* RIGHT APPOINTMENT CARD */}
<div className="w-full fade-right">
  <div className="relative bg-white rounded-3xl shadow-2xl border border-cyan-100 overflow-hidden">

    {/* TOP ACCENT */}
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500" />

    {/* CARD HEADER */}
    <div className="flex items-center gap-4 px-6 py-5 bg-gradient-to-r from-cyan-50 to-white border-b">
      <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-cyan-600 text-white shadow-md">
        <FiCalendar className="text-xl" />
      </div>

      <div>
        <h3 className="font-extrabold text-lg text-gray-900">
          Book Appointment
        </h3>
        <p className="text-sm text-gray-600">
          Fast · Secure · No payment required
        </p>
      </div>
    </div>

    {/* IFRAME CONTAINER */}
    <div className="p-3 bg-white">
      <iframe
        src="https://manish7xdr.setmore.com"
        className="w-full h-[520px] rounded-2xl"
        title="Book Appointment"
      />
    </div>

    {/* TRUST FOOTER */}
    <div className="px-6 py-3 bg-gray-50 border-t text-center">
      <p className="text-xs text-gray-500">
        🔒 Your information is safe · ⏱ Instant confirmation
      </p>
    </div>

  </div>
</div>


      </div>
    </section>
  );
}
