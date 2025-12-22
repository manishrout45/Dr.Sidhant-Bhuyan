import useScrollFade from "../hooks/useScrollFade";
import TestimonialsSection from "../components/TestimonialsSection";

export default function Testimonials() {
  useScrollFade();

  return (
    <>
      {/* Header Section */}
      <section
        className="
          relative w-full h-[50vh] bg-center bg-cover flex items-center justify-center
          -mt-16 sm:-mt-4
        "
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/background-clouds-fractal-foam-abstract-lights-subject-art-spirituality-painting-music-visual-effects-creative-technologies_27525-14339.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-cyan-600/50"></div>

        {/* Heading */}
        <div className="relative z-10 text-center">
          <h1 className="text-white text-5xl font-bold">Testimonial</h1>
        </div>
      </section>

      {/* Contact Section Component */}
      <TestimonialsSection />
      <section className="w-full bg-gradient-to-b from-gray-50 to-white py-20">
  <div className="max-w-7xl mx-auto px-4">

    {/* HEADER */}
    <div className="max-w-3xl mx-auto text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
        Real Experiences. Meaningful Recoveries.
      </h2>
      <p className="text-gray-600 mt-4 text-lg">
        Our patients’ feedback reflects not just successful treatment,
        but the quality of care, trust, and support they receive throughout
        their rehabilitation journey.
      </p>
    </div>

    {/* MAIN CONTENT */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">

      {/* LEFT – EXPERIENCE FLOW */}
      <div className="lg:col-span-2 bg-white rounded-3xl p-10 shadow-lg border border-gray-100">
        <h3 className="text-2xl font-bold text-gray-800 mb-8">
          What Patients Experience With Us
        </h3>

        <div className="space-y-6">

          <div className="flex gap-4">
            <div className="w-2 h-2 mt-2 rounded-full bg-cyan-600"></div>
            <p className="text-gray-600 leading-relaxed">
              A structured assessment that focuses on the root cause of pain,
              movement limitations, or neurological deficits.
            </p>
          </div>

          <div className="flex gap-4">
            <div className="w-2 h-2 mt-2 rounded-full bg-cyan-600"></div>
            <p className="text-gray-600 leading-relaxed">
              One-on-one therapy sessions led by experienced physiotherapists,
              ensuring focused attention and safer recovery.
            </p>
          </div>

          <div className="flex gap-4">
            <div className="w-2 h-2 mt-2 rounded-full bg-cyan-600"></div>
            <p className="text-gray-600 leading-relaxed">
              Continuous monitoring and plan adjustments based on progress,
              comfort levels, and functional improvement.
            </p>
          </div>

          <div className="flex gap-4">
            <div className="w-2 h-2 mt-2 rounded-full bg-cyan-600"></div>
            <p className="text-gray-600 leading-relaxed">
              Guidance beyond the clinic through posture correction, home
              exercise programs, and lifestyle advice.
            </p>
          </div>

        </div>
      </div>

      {/* RIGHT – OUTCOME PANEL */}
      <div className="bg-cyan-600 rounded-3xl p-10 text-white flex flex-col justify-between shadow-xl">

        <div>
          <h3 className="text-2xl font-bold mb-6">
            Outcomes That Matter
          </h3>

          <ul className="space-y-5 text-white/95">
            <li>
              <span className="font-semibold">✔ Reduced Pain</span>
              <p className="text-sm text-white/80">
                Effective pain management through targeted therapy and manual techniques.
              </p>
            </li>

            <li>
              <span className="font-semibold">✔ Improved Mobility</span>
              <p className="text-sm text-white/80">
                Restoring strength, flexibility, and movement confidence.
              </p>
            </li>

            <li>
              <span className="font-semibold">✔ Faster Functional Recovery</span>
              <p className="text-sm text-white/80">
                Helping patients return to daily activities and independence sooner.
              </p>
            </li>
          </ul>
        </div>

        <p className="mt-8 text-white/90 text-sm leading-relaxed">
          These outcomes are achieved through ethical practice,
          evidence-based techniques, and a patient-first approach.
        </p>

      </div>

    </div>

  </div>
</section>

    </>
  );
}
