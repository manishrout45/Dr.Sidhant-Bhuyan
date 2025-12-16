import React, { useEffect, useState } from "react";

// Dummy testimonials data
const testimonials = [
  {
    id: 1,
    name: "Jason Ramos",
    title: "Doctor of Health Medicine",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec sem accumsan, ullamcorper felis non, bibendum velit.",
    img: "https://img.freepik.com/free-photo/young-handsome-guy-wearing-checkered-shirt-doing-happy-thumbs-up-standing-white-wall_141793-30732.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    title: "Physiotherapist",
    text: "Duis rutrum tellus vel leo fermentum, vitae ullamcorper nunc porttitor. Suspendisse potenti.",
    img: "https://img.freepik.com/free-photo/portrait-cheerful-young-girl-showing-thumb-up_114579-81638.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 3,
    name: "David Patel",
    title: "Senior Orthopedic Specialist",
    text: "Aliquam erat volutpat. Vivamus sit amet neque eget erat hendrerit vehicula vitae sed arcu.",
    img: "https://img.freepik.com/free-photo/caucasian-young-man-wearing-pink-shirt-crossing-hands-isolated-orange-wall_141793-35791.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const leftIndex = (index - 1 + testimonials.length) % testimonials.length;
  const rightIndex = (index + 1) % testimonials.length;

  return (
    <section className="w-full py-12 bg-gray-50 flex flex-col items-center">
  <h3 className="text-sm font-semibold text-gray-500">OUR TESTIMONIALS</h3>
  <h2 className="fade-right text-3xl md:text-4xl font-bold mt-1 mb-10">What They Say</h2>

  <div className="flex items-center justify-center gap-4 w-full max-w-6xl px-4 fade-up">
    {/* LEFT IMAGE WITH CYAN OVERLAY */}
    <div className="hidden md:block w-1/4 relative rounded-lg overflow-hidden">
      <img
        src={testimonials[leftIndex].img}
        alt="left testimonial"
        className="w-full h-72 object-cover rounded-lg shadow-md"
      />
      <div className="absolute inset-0 bg-cyan-500 bg-opacity-40"></div>
    </div>

    {/* CENTER CARD */}
    <div className="w-full md:w-1/2 bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center text-center transition-all duration-500">
      <img
        src={testimonials[index].img}
        alt="main testimonial"
        className="w-32 h-32 object-cover rounded-full shadow-md mb-5"
      />

      <p className="text-gray-600 mb-4">{testimonials[index].text}</p>

      <h3 className="font-bold text-lg">{testimonials[index].name}</h3>
      <p className="text-gray-500 text-sm">{testimonials[index].title}</p>
    </div>

    {/* RIGHT IMAGE WITH CYAN OVERLAY */}
    <div className="hidden md:block w-1/4 relative rounded-lg overflow-hidden">
      <img
        src={testimonials[rightIndex].img}
        alt="right testimonial"
        className="w-full h-72 object-cover rounded-lg shadow-md"
      />
      <div className="absolute inset-0 bg-cyan-500 bg-opacity-40"></div>
    </div>
  </div>
</section>

  );
}
