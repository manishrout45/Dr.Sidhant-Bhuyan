import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";

/* ===============================
   TEXT TESTIMONIALS DATA
================================ */
const testimonials = [
  {
    id: 1,
    name: "Jason Ramos",
    title: "Doctor of Health Medicine",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec sem accumsan, ullamcorper felis non, bibendum velit.",
    img:
      "https://img.freepik.com/free-photo/young-handsome-guy-wearing-checkered-shirt-doing-happy-thumbs-up-standing-white-wall_141793-30732.jpg",
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    title: "Physiotherapist",
    text:
      "Duis rutrum tellus vel leo fermentum, vitae ullamcorper nunc porttitor. Suspendisse potenti.",
    img:
      "https://img.freepik.com/free-photo/portrait-cheerful-young-girl-showing-thumb-up_114579-81638.jpg",
  },
  {
    id: 3,
    name: "David Patel",
    title: "Senior Orthopedic Specialist",
    text:
      "Aliquam erat volutpat. Vivamus sit amet neque eget erat hendrerit vehicula vitae sed arcu.",
    img:
      "https://img.freepik.com/free-photo/caucasian-young-man-wearing-pink-shirt-crossing-hands-isolated-orange-wall_141793-35791.jpg",
  },
];

/* ===============================
   VIDEO TESTIMONIALS DATA
================================ */
const videoTestimonials = [
  {
    id: 1,
    title: "Patient Recovery Story",
    youtubeId: "IRmJ4Hnlodc",
  },
  {
    id: 2,
    title: "Patient Feedback",
    youtubeId: "Ns3UUJPE7CY",
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState(null);

  /* ===============================
     AUTO SLIDE TEXT TESTIMONIALS
  ================================ */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const leftIndex =
    (index - 1 + testimonials.length) % testimonials.length;
  const rightIndex = (index + 1) % testimonials.length;

  return (
    <>
      {/* ===============================
         TEXT TESTIMONIALS SECTION
      ================================ */}
      <section className="w-full py-12 bg-gray-50 flex flex-col items-center">
        <h3 className="text-sm font-semibold text-gray-500">
          OUR TESTIMONIALS
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold mt-1 mb-10">
          What They Say
        </h2>

        <div className="flex items-center justify-center gap-4 w-full max-w-6xl px-4">
          {/* LEFT IMAGE */}
          <div className="hidden md:block w-1/4 relative rounded-lg overflow-hidden">
            <img
              src={testimonials[leftIndex].img}
              alt="left testimonial"
              className="w-full h-72 object-cover rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-cyan-500/40" />
          </div>

          {/* CENTER CARD */}
          <div className="w-full md:w-1/2 bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center text-center transition-all duration-500">
            <img
              src={testimonials[index].img}
              alt="main testimonial"
              className="w-32 h-32 object-cover rounded-full shadow-md mb-5"
            />

            <p className="text-gray-600 mb-4">
              {testimonials[index].text}
            </p>

            <h3 className="font-bold text-lg">
              {testimonials[index].name}
            </h3>
            <p className="text-gray-500 text-sm">
              {testimonials[index].title}
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hidden md:block w-1/4 relative rounded-lg overflow-hidden">
            <img
              src={testimonials[rightIndex].img}
              alt="right testimonial"
              className="w-full h-72 object-cover rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-cyan-500/40" />
          </div>
        </div>
      </section>

      {/* ===============================
         VIDEO TESTIMONIALS SECTION
      ================================ */}
<section className="w-full py-16 bg-white">
  <div className="max-w-5xl mx-auto px-4 text-center">
    <h3 className="text-sm font-semibold text-gray-500">
      VIDEO TESTIMONIALS
    </h3>
    <h2 className="text-3xl md:text-4xl font-bold mt-1 mb-10">
      Real Stories From Real People
    </h2>

    {/* FLEX LAYOUT TO REMOVE ODD GAPS */}
    <div className="flex flex-col md:flex-row items-center justify-center gap-10">
      {videoTestimonials.map((video) => (
        <div
          key={video.id}
          className="relative w-[260px] sm:w-[280px] md:w-[300px] aspect-[9/16] rounded-2xl overflow-hidden shadow-lg bg-black"
        >
          {activeVideo === video.id ? (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
              title={video.title}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          ) : (
            <>
              {/* Thumbnail */}
              <img
                src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                alt={video.title}
                className="w-full h-full object-cover opacity-90"
              />

              {/* Play Button */}
              <button
                onClick={() => setActiveVideo(video.id)}
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg hover:scale-110 transition">
                  <FaPlay />
                </span>
              </button>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 text-sm font-medium">
                {video.title}
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  </div>
</section>

    </>
  );
}
