import React, { useState } from "react";

export default function PhysioServicesDetail() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
  {
    title: "Neuro Rehabilitation",
    img: "https://img.freepik.com/free-photo/doctor-helping-patient-rehabilitation_23-2150321632.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
    desc: "Specialized rehabilitation for patients with neurological disorders, focusing on restoring mobility, independence, and quality of life.",
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
    desc: "Focused care for musculoskeletal injuries and post‑surgical recovery to reduce pain and restore function.",
    points: [
      "Post-fracture & Post-operative Rehabilitation",
      "Joint Replacement Rehab (Knee, Hip, Shoulder)",
      "Frozen Shoulder & Shoulder Impingement",
      "Low Back Pain & Cervical Pain",
      "Disc Bulge / Slip Disc",
      "Osteoarthritis & Rheumatoid Arthritis",
      "Sports Injuries & Ligament Injuries",
    ],
    bookingLink: "/contact",
  },

  {
    title: "In-Patient Rehabilitation",
    img: "https://img.freepik.com/free-photo/practitioner-man-doctor-helping-retiree-senior-male-wheelchair-physiotherapy-strength-exercise_482257-12761.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
    desc: "Comprehensive bedside and in‑house rehabilitation for admitted and critically ill patients.",
    points: [
      "Bedside Physiotherapy",
      "Early Mobilization in ICU & Ward",
      "Post-Ventilator & Post-ICU Rehabilitation",
      "Tracheostomy Care & Weaning Support",
      "Chest Physiotherapy",
      "Pressure Sore Prevention & Management",
    ],
    bookingLink: "/contact",
  },

  {
    title: "Cardio-Pulmonary Rehabilitation",
    img: "https://img.freepik.com/free-photo/scientist-researcher-preparing-woman-patient-endurance-test-attaching-electrodes-professional-body-equipment-team-doctors-monitoring-health-patinet-vo2-ekg-scan-runs-computer-screen_482257-13205.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
    desc: "Therapeutic programs designed to improve lung capacity, endurance, and cardiovascular health.",
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

  {
    title: "Pain Management & Advanced Modalities",
    img: "https://img.freepik.com/premium-photo/man-medical-office-physiotherapist-is-rehabilitating-back_926199-2523815.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
    desc: "Evidence-based pain relief techniques using modern physiotherapy equipment.",
    points: [
      "Electrotherapy (IFT, TENS, Ultrasound)",
      "Laser Therapy",
      "Shockwave Therapy",
      "Dry Needling",
      "Manual Therapy & Mobilization",
      "Myofascial Release",
    ],
    bookingLink: "/contact",
  },

  {
    title: "Robotics & Technology-Assisted Rehabilitation",
    img: "https://img.freepik.com/free-photo/athlete-woman-with-mask-running-gym-bycle-trainning-body-endurance-while-researcher-doctor-measuring-heart-rate-monitoring-egk-data-laboratory-sportwoman-with-medical-electrodes-it_482257-29986.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
    desc: "Advanced robotic rehabilitation designed for precise therapy and measurable recovery outcomes.",
    points: [
      "Robotic Gait Training",
      "Upper Limb & Hand Robotic Therapy",
      "Sensor-Based Balance & Postural  Training",
      "Task-Oriented Robotics Therapy for Stroke & SCI patients",
      "AI-Assisted Movement Analysis & Progress Monitoring",
      "Functional Electrical Stimulation (FES) Integrated Training",
      "Virtual Reality (VR) based  Neuro & Cognitive Rehabilitation",
      "Early Mobilization Using Technology-Assisted Devices",
      "Evidence-Based Protocols with Quantifiable Outcome Measures",
    ],
    bookingLink: "/contact",
  },

  {
    title: "Onco Rehabilitation",
    img: "https://img.freepik.com/premium-photo/physiotherapist-women-patient-exercise-wellness-help-gym-clinic-session-female-people-trainer-healing-with-physiotherapy-fitness-strong-muscle-rehabilitation-center_590464-459896.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
    desc: "Specialized rehabilitation for cancer patients to improve strength, function, and quality of life.",
    points: [
      "Pre & Post-Cancer Surgery Rehab",
      "Post-Chemo & Radiotherapy Rehab",
      "Breast Cancer & Lymphedema Management",
      "Head & Neck Cancer Rehabilitation",
      "Cancer-related Fatigue , Pain & Weakness Management",
      "Mobility, Balance & Endurance Training",
      "Palliative Rehabilitation & Comfort Care",
      "Functional Independence & Quality‑of‑Life Enhancement",
    ],
    bookingLink: "/contact",
  },

  {
    title: "Geriatric Rehabilitation",
    img: "https://img.freepik.com/free-photo/old-man-doing-muscle-injury-exercise-using-resistance-band-with-nurse-beside_482257-109.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
    desc: "Personalized programs for elderly patients to maintain independence and prevent falls.",
    points: [
      "Age-related Mobility Disorders",
      "Balance & Fall Prevention Training",
      "Arthritis Management",
      "Post-fracture Elderly Care",
      "Functional Independence Training",
    ],
    bookingLink: "/contact",
  },

  {
    title: "Pediatric Physiotherapy",
    img: "https://img.freepik.com/free-photo/mom-help-girl-train-ball_23-2148570195.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
    desc: "Gentle, goal‑oriented therapy for children with developmental and neurological conditions.",
    points: [
      "Developmental Delay",
      "Cerebral Palsy",
      "Pediatric Neurological Disorders",
      "Congenital & Post-Surgical Conditions",
    ],
    bookingLink: "/contact",
  },
  {
    title: "Post-Surgical & Trauma Rehabilitation",
    img: "https://img.freepik.com/premium-photo/young-couple-corridor_1048944-14290754.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
    desc: "Accelerated and safe recovery following surgeries and accidents.",
    points: [
      "Orthopaedic & Neuro Surgeries",
      "Trauma & Road Traffic Accident Cases",
      "Strengthening & Functional Training",
      "ADL (Activities of Daily Living) Training",
    ],
    bookingLink: "/contact",
  },

  {
    title: "Home Physiotherapy Services",
    img: "https://img.freepik.com/free-photo/man-visit-rehabilitation-center_23-2150356754.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
    desc: "Professional physiotherapy care delivered at home for patients unable to travel.",
    points: [
      "Neuro & Orthopaedic Home Rehab",
      "Post-operative Care at Home",
      "Elderly & Bedridden Patient Care",
    ],
    bookingLink: "/contact",
  },
  {
    title: "Wellness, Fitness & Preventive Care",
    img: "https://img.freepik.com/premium-photo/athletic-body-sporty-young-couple-gaiety-home-exercise_31965-685751.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
    desc: "Programs focused on long-term health, posture correction, and injury prevention.",
    points: [
      "Posture Correction",
      "Ergonomic Advice",
      "Weight Management Support",
      "Exercise Prescription & Lifestyle Modification",
    ],
    bookingLink: "/contact",
  },{
    title: "Skill Training Services",
    img: "https://img.freepik.com/premium-photo/physiotherapist-women-patient-exercise-wellness-help-gym-clinic-session-female-people-trainer-healing-with-physiotherapy-fitness-strong-muscle-rehabilitation-center_590464-459896.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
    desc: "Targeted rehabilitation programs to restore independence, functional skills, and readiness for work and daily life.",
    points: [
      "ADL & IADL Independence Training",
      "Motor, Balance & Mobility Training",
      "Gait, Endurance & Outdoor Walking",
      "Hand Function & Upper Limb Skills",
      "Cognitive-Motor Skill Training",
      "Work Conditioning & Vocational Rehab",
      "Return-to-Work & Task-Based Training",
      "Assistive Device & Caregiver Training",
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
          Kyra Physiotherapy & Rehabilitation Centre is a comprehensive 
          healing and recovery facility delivering ethical, evidence‑based, and patient‑centric care. 
          Our multidisciplinary approach ensures safe, effective, and holistic rehabilitation for patients across all age groups.
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
