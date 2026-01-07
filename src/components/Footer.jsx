import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { IoMdArrowRoundForward } from "react-icons/io";
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-cyan-700 text-white">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "url('https://www.orthoneurophysioclinic.com/wp-content/uploads/2021/07/ortho-physio.jpg')",
        }}
      ></div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* BRAND */}
        <div>
          <h2 className="text-3xl font-semibold flex items-center gap-2">
            <span className="text-cyan-400 text-4xl">*</span> Dr. Sidhant Bhuyan
          </h2>

          <p className="mt-4 text-gray-300 leading-7">
            Delivering advanced physiotherapy care focused on recovery, pain
            relief, mobility enhancement, and long-term wellness.
          </p>

          {/* Phone */}
          <div className="mt-4 space-y-3 text-gray-300">
            <div className="flex items-center gap-3">
              <HiPhone className="text-xl" />
              <a href="tel:+919861607985" className="hover:text-cyan-400">
                +91 98616 07985
              </a>
            </div>

            <div className="flex items-center gap-3">
              <HiMail className="text-xl" />
              <a
                href="mailto:sidhantbhuyan1000@gmail.com"
                className="hover:text-cyan-400"
              >
                sidhantbhuyan1000@gmail.com
              </a>
            </div>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4 mt-6">
            <IoMdArrowRoundForward className="text-white text-3xl" />

            <div className="flex gap-3">
              <a href="https://www.facebook.com/share/1Djs9kbhSV/" target="_blank" rel="noreferrer"
                className="w-10 h-10 bg-cyan-900 rounded-full flex items-center justify-center hover:bg-cyan-400 transition">
                <FaFacebookF />
              </a>

              <a href="https://www.youtube.com/@Dr.SidhantBhuyan" target="_blank" rel="noreferrer"
                className="w-10 h-10 bg-cyan-900 rounded-full flex items-center justify-center hover:bg-cyan-400 transition">
                <FaYoutube />
              </a>

              <a href="https://www.instagram.com/sidhant_bhuyan_?igsh=YnowcmN6am94d2Fw" target="_blank" rel="noreferrer"
                className="w-10 h-10 bg-cyan-900 rounded-full flex items-center justify-center hover:bg-cyan-400 transition">
                <FaInstagram />
              </a>

              <a href="https://www.linkedin.com/in/dr-sidhant-bhuyan-p-t-121a93118" target="_blank" rel="noreferrer"
                className="w-10 h-10 bg-cyan-900 rounded-full flex items-center justify-center hover:bg-cyan-400 transition">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-3 text-gray-300">
            {[
              { name: "About Us", path: "/about" },
              { name: "Contact Us", path: "/contact" },
              { name: "Privacy Policy", path: "/privacy-policy" },
              { name: "Terms & Conditions", path: "/terms-conditions" },
              { name: "Patient Reviews", path: "/testimonials" },
            ].map((link, i) => (
              <li key={i}>
                <NavLink
                  to={link.path}
                  className="flex items-center gap-2 hover:text-cyan-400 transition"
                >
                  <IoMdArrowRoundForward /> {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Our Services</h3>
          <ul className="space-y-3 text-gray-300">
            {[
              "Advanced Physiotherapy",
              "Sports Injury Treatment",
              "Manual Therapy",
              "Spine & Pain Management",
              "Post-Surgery Rehabilitation",
              "Neurological Physiotherapy",
            ].map((service, i) => (
              <li key={i} className="flex items-center gap-2 hover:text-cyan-400 transition">
                <IoMdArrowRoundForward /> {service}
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Our Centres</h3>
          <ul className="space-y-5 text-gray-300">

            <li className="flex items-start gap-3">
              <HiLocationMarker className="text-xl mt-1" />
              <div>
                <p className="font-medium text-white">
                  Kyra Physiotherapy & Rehabilitation Centre
                </p>
                <p className="text-sm leading-6">
                  Backside of K7/677, BMC Kalyan Mandap, in front of BMC Park,
                  Kalinganagar, Bhubaneswar, Odisha 751029
                </p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <HiLocationMarker className="text-xl mt-1" />
              <div>
                <p className="font-medium text-white">
                  Kaivalya Physiotherapy & Rehabilitation Kendra
                </p>
                <p className="text-sm leading-6">
                  N5/15, Block N5, IRC Village, Nayapalli,
                  Bhubaneswar, Odisha 751015
                </p>
              </div>
            </li>

          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="w-full bg-cyan-950 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm">
          <p>© {new Date().getFullYear()} Dr. Sidhant Bhuyan. All rights reserved.</p>
          <p>
            Designed By{" "}
            <a href="https://marcadspro.com/" target="_blank" rel="noopener noreferrer"
              className="text-cyan-400 hover:underline">
              MarcadsPro
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
