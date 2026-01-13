import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";

/* ===============================
   TEXT TESTIMONIALS DATA
================================ */
const testimonials = [
  {
    id: 1,
    name: "Budhadev Jena",
    title: "Patient",
    text:
      "After a traumatic brain injury with right-side paralysis, I was bedridden. With Dr. Sidhant Bhuyan’s physiotherapy, I recovered and started walking independently within 2 months. Truly grateful.",
    img: "/assets/images/testimonials/BudhadevJena.jpeg",
  },
  {
    id: 2,
    name: "SAIJAL THAKUR",
    title: "Patient",
    text:
      "I suffered from fibromyalgia with severe full-body pain for 3–4 years. After Dr. Sidhant Bhuyan’s treatment, my pain improved drastically in 7 days.",
    img: "/assets/images/testimonials/SAIJALTHAKUR.jpeg",
  },
  {
    id: 3,
    name: "Braja bandhu jena",
    title: "Patient",
    text:
      "I fractured my wrist in an accident and had severe pain. Physiotherapy helped me regain full movement.",
    img: "/assets/images/testimonials/BrajaBandhuJena.jpeg",
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
  const [prevIndex, setPrevIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState(null);

  /* ===============================
     AUTO SLIDE TEXT TESTIMONIALS
  ================================ */
  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(index);
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [index]);

  const leftIndex =
    (index - 1 + testimonials.length) % testimonials.length;
  const rightIndex = (index + 1) % testimonials.length;

  const direction = index > prevIndex ? "right" : "left";

  return (
    <>
      {/* ===============================
         TEXT TESTIMONIALS SECTION
      ================================ */}
      <section className="w-full py-12 bg-gray-50 flex flex-col items-center">
        <h3 className="text-sm font-semibold text-gray-500">
          OUR TESTIMONIALS
        </h3>
        <h2 className="text-3xl sm:text-4xl font-bold mt-1 mb-10 text-center px-2">
          What They Say
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full max-w-6xl px-4">
          {/* LEFT IMAGE */}
          <div className="hidden md:block w-1/4 relative rounded-lg overflow-hidden flex-shrink-0">
            <img
              src={testimonials[leftIndex].img}
              alt="left testimonial"
              className="w-full h-64 md:h-72 object-cover rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-cyan-500/40 rounded-lg" />
          </div>

          {/* CENTER SLIDING CARD */}
          <div className="relative w-full md:w-1/2 min-h-[350px] md:min-h-[400px] max-h-[600px] overflow-auto">
            <div
              key={index}
              className={`absolute inset-0 bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-100
              flex flex-col items-center text-center
              ${
                direction === "right"
                  ? "animate-slide-in-right"
                  : "animate-slide-in-left"
              }`}
            >
              <img
                src={testimonials[index].img}
                alt="main testimonial"
                className="w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-full shadow-md mb-5"
              />

              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                {testimonials[index].text}
              </p>

              <h3 className="font-bold text-lg sm:text-xl">
                {testimonials[index].name}
              </h3>
              <p className="text-gray-500 text-sm">{testimonials[index].title}</p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hidden md:block w-1/4 relative rounded-lg overflow-hidden flex-shrink-0">
            <img
              src={testimonials[rightIndex].img}
              alt="right testimonial"
              className="w-full h-64 md:h-72 object-cover rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-cyan-500/40 rounded-lg" />
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
          <h2 className="text-3xl sm:text-4xl font-bold mt-1 mb-10 text-center">
            Real Stories From Real People
          </h2>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {videoTestimonials.map((video) => (
              <div
                key={video.id}
                className="relative w-full sm:w-[280px] md:w-[380px] aspect-video rounded-2xl overflow-hidden shadow-lg bg-black"
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
                    <img
                      src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover opacity-90"
                    />

                    <button
                      onClick={() => setActiveVideo(video.id)}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <span className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg hover:scale-110 transition">
                        <FaPlay />
                      </span>
                    </button>

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
