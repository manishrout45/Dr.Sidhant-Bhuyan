import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const teamMembers = [
  {
  name: "Dr. Helena Farse",
  role: "Senior Physiotherapist | Orthopedic Rehabilitation",
  image: "https://i.pinimg.com/736x/ec/b3/32/ecb3320a4cb66ecdd9dd903f1fd6a5d8.jpg",
},
{
  name: "Dr. Dan Pitts",
  role: "Physiotherapist | Sports Injury Specialist",
  image: "https://i.pinimg.com/736x/2b/87/2b/2b872b6b404b61fba3f2b67569b07801.jpg",
},
{
  name: "Dr. Tomas Willens",
  role: "Physiotherapist | Neuro & Post-Stroke Rehabilitation",
  image: "https://i.pinimg.com/736x/2b/87/2b/2b872b6b404b61fba3f2b67569b07801.jpg",
},

];

export default function OurTeam() {
  return (
    <section className="bg-cyan-600 py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-white text-xs font-semibold uppercase mb-2">
            Our Team Members
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Meet The Team
          </h2>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white text-gray-900 text-center p-6 hover:shadow-lg transition-shadow duration-300 rounded-xl"
            >
              {/* Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />

              {/* Name */}
              <h3 className="text-lg font-semibold">{member.name}</h3>

              {/* Role */}
              <p className="text-sm text-gray-500 mt-1">{member.role}</p>

              {/* Social Icons */}
              <div className="flex justify-center gap-4 mt-4 text-gray-500">
                <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
                <FaInstagram className="hover:text-pink-500 cursor-pointer" />
                <FaYoutube className="hover:text-red-600 cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
