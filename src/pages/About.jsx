import OurTeam from "../components/OurTeam";
import useScrollFade from "../hooks/useScrollFade";  
import { FaCheckCircle } from "react-icons/fa";
export default function About() {
  useScrollFade();
  return (
    <>

      <section
  className="relative w-full h-[50vh] bg-center bg-cover flex items-center justify-center -mt-16 sm:-mt-4"
  style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/background-clouds-fractal-foam-abstract-lights-subject-art-spirituality-painting-music-visual-effects-creative-technologies_27525-14339.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80')" }}  // change image
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-cyan-600/50"></div>

  {/* Heading */}
  <div className="relative z-10 text-center">
    <h1 className="text-white text-5xl font-bold">About</h1>
  </div>
</section>

      {/* ABOUT */}

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
            Dr. Sidhant Bhuyan is the Founder of Kyra Physiotherapy & 
            Rehabilitation Centre and Kaivalya Physiotherapy & Rehabilitation Centre, 
            institutions dedicated to delivering world-class, evidence-based rehabilitation services. 
            His clinical expertise spans Advanced Chiropractic Care, Neuro Rehabilitation, Orthopaedic 
            Rehabilitation, Onco Rehabilitation, Paediatric Rehabilitation, and Comprehensive Inpatient Rehabilitation.
            With a strong focus on clinical excellence, ethical practice, and personalized care, 
            Dr. Bhuyan leads integrated rehabilitation programs designed to restore function, 
            independence, and quality of life. His approach aligns with international rehabilitation 
            standards and emphasizes multidisciplinary collaboration, innovation, and measurable outcomes. 
          </p>
        </div>
      </div>
    </section>

    <OurTeam />

      {/* WHY CHOOSE US */}
          <section className="w-full bg-cyan-50 py-12 md:py-16">
  <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

    {/* LEFT CONTENT */}
    <div className="text-center md:text-left md:order-1">
      <p className="text-sm tracking-widest text-gray-600 mb-2 uppercase">
        Why Choose Us
      </p>

      <h2 className="fade-right text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
        Benefits of Physiotherapy
        <br />
        <span className="text-cyan-600">
          Your Path to Better Mobility & Wellness
        </span>
      </h2>

      <p className="fade-up text-gray-500 mt-4 text-sm sm:text-base max-w-lg">
        Our physiotherapy care focuses on personalized treatments designed
        to reduce pain, improve mobility, and help you return to the activities you love.
      </p>

      {/* STATS */}
      <div className="fade-up grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-800">12+</h3>
          <p className="text-gray-500 text-sm">Experienced Therapists</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-800">98%</h3>
          <p className="text-gray-500 text-sm">Patient Satisfaction</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-800">18K+</h3>
          <p className="text-gray-500 text-sm">Sessions Completed</p>
        </div>
      </div>

      {/* FEATURES */}
      <ul className="fade-up mt-6 space-y-3 max-w-md mx-auto md:mx-0">
        <li className="flex items-center gap-2 text-gray-700">
          <FaCheckCircle className="text-cyan-600 shrink-0" />
          Personalized Treatment Programs
        </li>
        <li className="flex items-center gap-2 text-gray-700">
          <FaCheckCircle className="text-cyan-600 shrink-0" />
          Modern Physiotherapy Equipment
        </li>
        <li className="flex items-center gap-2 text-gray-700">
          <FaCheckCircle className="text-cyan-600 shrink-0" />
          Expert Orthopedic & Sports Rehab
        </li>
      </ul>

      {/* BUTTON */}
      <div className="mt-8 flex justify-center md:justify-start">
        <button className="material-bubble px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full font-medium transition">
          Book an Appointment
        </button>
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="relative flex justify-center md:justify-end md:order-2">
      <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 md:mr-20 rounded-full overflow-hidden border-[8px] md:border-[10px] border-gray-200 relative">
        <img
          src="https://img.freepik.com/free-photo/woman-getting-massage-rehabilitation-center_52683-111762.jpg"
          alt="Physiotherapy Session"
          className="w-full h-full object-cover"
        />
      </div>

      {/* DECORATIVE ELEMENTS */}
      <div className="hidden sm:block absolute -top-4 -left-4 w-16 h-16 md:w-20 md:h-20 border-4 border-cyan-400 rounded-full border-dashed"></div>
      <div className="hidden sm:block absolute -bottom-5 -right-5 w-10 h-10 md:w-12 md:h-12 bg-cyan-400/20 rounded-full"></div>
    </div>

  </div>
</section>


    </>
  );
}
