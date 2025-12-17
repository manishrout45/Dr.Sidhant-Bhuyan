import BlogCard from "../components/BlogCard";
import PageHeader from "../components/PageHeader";
import AboutSection from "../components/AboutSection";
import { blogData } from "../data/blogData";
import DepartmentSection from "../components/DepartmentSection";
import ServiceSection from "../components/ServiceSection";
import { FaCheckCircle } from "react-icons/fa";
import PhysioServices from "../components/PhysioServices";
import StatsSection from "../components/StatsSection";
import GetAppointment from "../components/GetAppointment";
import TestimonialsSection from "../components/TestimonialsSection";
import ServiceMarqueeLTR from "../components/ServiceMarqueeLTR";
import ServiceMarqueeRTL from "../components/ServiceMarqueeRTL";
import useScrollFade from "../hooks/useScrollFade";
export default function Home() {
  useScrollFade();
  return (
    <>
      <PageHeader />
      <AboutSection />
      <PhysioServices />
      <StatsSection />
      <ServiceSection />

    <section className="w-full bg-cyan-50 py-12 md:py-16">
  <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

    {/* Left Image */}
    <div className="relative flex justify-center md:justify-start">
      <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 md:ml-20 rounded-full overflow-hidden border-[8px] md:border-[10px] border-gray-200 relative">
        <img
          src="https://img.freepik.com/free-photo/woman-getting-massage-rehabilitation-center_52683-111762.jpg"
          alt="Physiotherapy Session"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Decorative Elements (hidden on very small screens) */}
      <div className="hidden sm:block absolute -top-4 -right-4 w-16 h-16 md:w-20 md:h-20 border-4 border-cyan-400 rounded-full border-dashed"></div>
      <div className="hidden sm:block absolute -bottom-5 -left-5 w-10 h-10 md:w-12 md:h-12 bg-cyan-400/20 rounded-full"></div>
    </div>

    {/* Right Content */}
    <div className="text-center md:text-left">
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

      <p className="fade-up text-gray-500 mt-4 text-sm sm:text-base">
        Our physiotherapy care focuses on personalized treatments designed
        to reduce pain, improve mobility, and help you return to the activities you love.
      </p>

      {/* Numbers Section */}
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

      {/* List */}
      <ul className="fade-up mt-6 space-y-3 text-left max-w-md mx-auto md:mx-0">
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

      {/* Button */}
      <div className="mt-8 flex justify-center md:justify-start">
        <button className="material-bubble px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full font-medium transition">
          Book an Appointment
        </button>
      </div>
    </div>

  </div>
</section>

    <ServiceMarqueeLTR />
    <TestimonialsSection />
    <ServiceMarqueeRTL />
    <div className="py-14 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 ">
        <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>

        <div className="grid md:grid-cols-3 gap-6 ">
          {blogData.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>

          <section
      className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/images/phyciotheropy.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-7xl mx-auto px-4">
        <h4 className="text-cyan-400 font-semibold tracking-wider uppercase mb-3">
          Physiotherapy & Rehabilitation
        </h4>

        <h1 className="fade-left text-white text-2xl md:text-6xl font-bold leading-tight mb-4">
          Recover Stronger, Move Better  
        </h1>

        <p className="fade-up text-gray-200 max-w-2xl mx-auto text-sm md:text-lg mb-6">
          Expert physiotherapy treatments designed to relieve pain, improve mobility,  
          and restore your active lifestyle with personalized care.
        </p>

        <button className="material-bubble bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg">
          Book Appointment
        </button>
      </div>
    </section>

      <GetAppointment />
    </>
  );
}
