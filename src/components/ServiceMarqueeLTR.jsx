import { FaStethoscope } from "react-icons/fa";

export default function ServiceMarqueeLTR() {
  return (
    <div className="w-full overflow-hidden bg-cyan-900 py-3">
      <div className="flex whitespace-nowrap animate-slideRight">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center gap-10 mx-10">
            <Item text="Physiotherapy Consultation" />
            <Item text="Manual Therapy" />
            <Item text="Sports Injury Rehab" />
            <Item text="Post-Surgery Rehab" />
            <Item text="Back & Neck Pain Therapy" />
            <Item text="Neurological Physiotherapy" />
            <Item text="Pediatric Physiotherapy" />
            <Item text="Orthopedic Physiotherapy" />
          </div>
        ))}
      </div>
    </div>
  );
}

function Item({ text }) {
  return (
    <div className="flex items-center gap-2 text-white text-sm md:text-base font-medium">
      <FaStethoscope className="text-white" />
      {text}
    </div>
  );
}
