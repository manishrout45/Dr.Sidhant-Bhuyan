import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import BlogCard from "../components/BlogCard";
import PageHeader from "../components/PageHeader";
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";
import PhysioServices from "../components/PhysioServices";
import StatsSection from "../components/StatsSection";
import GetAppointment from "../components/GetAppointment";
import TestimonialsSection from "../components/TestimonialsSection";
import ServiceMarqueeLTR from "../components/ServiceMarqueeLTR";
import ServiceMarqueeRTL from "../components/ServiceMarqueeRTL";
import useScrollFade from "../hooks/useScrollFade";

import { getBlogs } from "../data/blogApi";

export default function Home() {
  useScrollFade();

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlogs()
      .then((data) => {
        const latestThree = [...data]
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 3);

        setBlogs(latestThree);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
        setBlogs([]);
      })
      .finally(() => setLoading(false));
  }, []);

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

      {/* BLOG SECTION */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Latest Articles</h2>

            {/* SEE MORE BUTTON */}
            <Link
              to="/blogs"
              className="text-blue-600 font-medium hover:underline"
            >
              See more →
            </Link>
          </div>

          {loading ? (
            <p className="text-gray-500">Loading blogs...</p>
          ) : (
            <>
              {blogs.length > 0 ? (
                <div className="grid md:grid-cols-3 gap-6">
                  {blogs.map((blog) => (
                    <BlogCard key={blog._id} blog={blog} />
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No blogs available</p>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/images/phyciotheropy.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-center max-w-7xl mx-auto px-4">
          <h4 className="text-cyan-400 font-semibold uppercase mb-3">
            Physiotherapy & Rehabilitation
          </h4>

          <h1 className="fade-left text-white text-2xl md:text-6xl font-bold mb-4">
            Recover Stronger, Move Better
          </h1>

          <p className="fade-up text-gray-200 max-w-2xl mx-auto mb-6">
            Expert physiotherapy treatments designed to relieve pain, improve
            mobility, and restore your active lifestyle.
          </p>

          <a
            href="#get-appointment"
            className="material-bubble inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
          >
            Book Appointment
          </a>
        </div>
      </section>

      <GetAppointment />
    </>
  );
}
