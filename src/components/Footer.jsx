import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoMdArrowRoundForward } from "react-icons/io";
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="relative bg-cyan-700/100 text-white">
      {/* Background Image with Overlay */}
      <div
  className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none"
  style={{ backgroundImage: "url('https://www.orthoneurophysioclinic.com/wp-content/uploads/2021/07/ortho-physio.jpg')" }}
></div>


      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Brand Section */}
        <div>
          <h2 className="text-3xl font-semibold flex items-center gap-2">
            <span className="text-cyan-400 text-4xl">*</span> Dr. Sidhant Bhuyan
          </h2>

          <p className="mt-4 text-gray-300 leading-7">
            Delivering advanced physiotherapy care focused on recovery, pain relief,
            mobility enhancement, and long-term wellness. Trusted by patients for 
            personalized, science-backed treatments.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-6">
            <IoMdArrowRoundForward className="text-white text-3xl" />
            <div className="flex gap-3">
              {[
                { icon: <FaFacebookF /> },
                { icon: <FaTwitter /> },
                { icon: <FaInstagram /> },
                { icon: <FaLinkedinIn /> },
              ].map((item, index) => (
                <span
                  key={index}
                  className="w-10 h-10 bg-cyan-900 rounded-full flex items-center justify-center cursor-pointer hover:bg-cyan-400 transition duration-200"
                >
                  {item.icon}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-3 text-gray-300">
            {[
              "About Us",
              "Contact Us",
              "Privacy Policy",
              "Terms & Conditions",
              "Patient Reviews",
              "Our Specialists",
            ].map((text, i) => (
              <li
                key={i}
                className="flex items-center gap-2 hover:text-cyan-400 cursor-pointer transition duration-200"
              >
                <IoMdArrowRoundForward /> {text}
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
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
              <li
                key={i}
                className="flex items-center gap-2 hover:text-cyan-400 cursor-pointer transition duration-200"
              >
                <IoMdArrowRoundForward /> {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Contact Info</h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center gap-3 hover:text-cyan-400 cursor-pointer transition duration-200">
              <HiLocationMarker className="text-xl" />  
              Bhubaneswar, Odisha, India
            </li>

            <li className="flex items-center gap-3 hover:text-cyan-400 cursor-pointer transition duration-200">
              <HiMail className="text-xl" />  
              <a href="mailto:support@drsidhantphysio.com" className="hover:font-semibold">
                support@drsidhantphysio.com
              </a>
            </li>

            <li className="flex items-center gap-3 hover:text-cyan-400 cursor-pointer transition duration-200">
              <HiPhone className="text-xl" />
              <a href="tel:+919876543210" className="hover:font-semibold">
                +91 98765 43210
              </a>
            </li>

            <li className="flex items-center gap-3 hover:text-cyan-400 cursor-pointer transition duration-200">
              <HiPhone className="text-xl" />
              <a href="tel:+919123456789" className="hover:font-semibold">
                +91 91234 56789
              </a>
            </li>

          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-cyan-950 py-4 z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm">
          <p>© {new Date().getFullYear()} Dr. Sidhant Bhuyan, All rights reserved.</p>
          <p>
            Designed By{" "}

  <a
    href="https://marcadspro.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-cyan-400 cursor-pointer hover:underline"
  >
    MarcadsPro
  </a>


          </p>
        </div>
      </div>
    </footer>
  );
}
