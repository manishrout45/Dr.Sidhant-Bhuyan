import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaHeartbeat,
  FaUserMd,
  FaGoogle,
} from "react-icons/fa";

export default function KaivalyaPhysiotherapyKendra() {
  return (
    <div className="bg-gray-50">
      {/* HERO SECTION */}
      <section
        className="relative w-full h-[50vh] bg-center bg-cover flex items-center justify-center -mt-16 sm:-mt-4"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/background-clouds-fractal-foam-abstract-lights-subject-art-spirituality-painting-music-visual-effects-creative-technologies_27525-14339.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-cyan-600/50"></div>

        <div className="relative z-10 text-center">
          <h1 className="text-white text-5xl font-bold">
            Kaivalya Physiotherapy & Rehabilitation Kendra
          </h1>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <FaHeartbeat className="text-cyan-600" />
              About the Centre
            </h2>

            <p className="text-gray-700 leading-relaxed mb-8">
              Kaivalya Physiotherapy & Rehabilitation Kendra focuses on holistic
              rehabilitation through personalized treatment plans. We combine
              modern physiotherapy techniques with compassionate care to help
              patients regain mobility, reduce pain, and improve overall quality
              of life.
            </p>

            {/* INFO CARDS */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                <FaMapMarkerAlt className="text-3xl text-cyan-600 mb-3" />
                <h3 className="font-semibold text-lg mb-1">Address</h3>
                <p className="text-gray-600">
                  N 5, 15, Block N5, IRC Village, Nayapalli,
                  Bhubaneswar, Odisha 751015
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                <FaPhoneAlt className="text-3xl text-cyan-600 mb-3" />
                <h3 className="font-semibold text-lg mb-1">Phone</h3>
                <p className="text-gray-600">+91 98616 07985</p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                <FaClock className="text-3xl text-cyan-600 mb-3" />
                <h3 className="font-semibold text-lg mb-1">Timings</h3>
                <p className="text-gray-600">
                  6:30 AM – 10:30 PM (Sunday closed)
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                <FaUserMd className="text-3xl text-cyan-600 mb-3" />
                <h3 className="font-semibold text-lg mb-1">Expert Care</h3>
                <p className="text-gray-600">
                  Qualified physiotherapists & modern equipment
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT MAP + BUTTONS */}
          <div className="relative">

            {/* Glow background (non-blocking) */}
            <div className="absolute -inset-3 bg-cyan-600/20 rounded-2xl blur-xl pointer-events-none"></div>

            {/* Map */}
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl z-10">
              <iframe
                title="Kaivalya Physiotherapy Kendra Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10848.786666480917!2d85.80534692334443!3d20.296473511243295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909e754416b99%3A0xd2f81318a0d0360f!2sKAIVALYA%20PHYSIOTHERAPY%20%26%20REHABILITATION%20KENDRA!5e0!3m2!1sen!2sin!4v1767695838096!5m2!1sen!2sin"
                className="w-full h-[420px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>
            </div>

            {/* CTA BUTTONS UNDER MAP */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4 relative z-20">
              <a
                href="/contact"
                className="flex-1 text-center bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition"
              >
                Book an Appointment
              </a>

              <a
                href="https://share.google/pfQ3bj7KvPscxNbpV"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white px-6 py-3 rounded-full font-semibold transition"
              >
                <FaGoogle />
                Google Business Profile
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
