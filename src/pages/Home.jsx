import BlogCard from "../components/BlogCard";
import PageHeader from "../components/PageHeader";
import AboutSection from "../components/AboutSection";
import { blogData } from "../data/blogData";
import ServiceSection from "../components/ServiceSection";

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

        <a
  href="#get-appointment"
  className="material-bubble inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg"
>
  Book Appointment
</a>

      </div>
    </section>

      <GetAppointment />
    </>
  );
}
