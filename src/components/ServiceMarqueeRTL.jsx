import React from "react";
import { FaHeartbeat } from "react-icons/fa";

function Item({ text }) {
  return (
    <div className="flex items-center gap-2 text-white text-lg font-medium">
      <FaHeartbeat className="text-white text-xl" />
      {text}
    </div>
  );
}

export default function ServiceMarqueeRTL() {
  return (
    <div className="w-full overflow-hidden bg-cyan-900 py-3">
      <div className="flex whitespace-nowrap animate-slideLeft">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center gap-10 mx-10">
            <Item text="Manual Therapy" />
            <Item text="Sports Injury Rehab" />
            <Item text="Pain Management" />
            <Item text="Posture Correction" />
            <Item text="Neurological Physio" />
            <Item text="Orthopedic Physio" />
          </div>
        ))}
      </div>
    </div>
  );
}
