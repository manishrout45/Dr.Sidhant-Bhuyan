// StatsSection.jsx
import React from "react";
import { FaUserInjured, FaDumbbell, FaHandsHelping, FaStar } from "react-icons/fa";

function formatNumber(n) {
  if (n >= 1000) return n.toLocaleString();
  return n;
}

export default function StatsSection() {
  const stats = [
    {
      icon: <FaUserInjured className="text-3xl" />,
      label: "Patients Treated",
      value: 400,
      suffix: "+",
    },
    {
      icon: <FaDumbbell className="text-3xl" />,
      label: "Therapy Sessions Completed",
      value: 8000,
      suffix: "+",
    },
    {
      icon: <FaHandsHelping className="text-3xl" />,
      label: "Rehabilitation Methods Applied",
      value: 12,
      suffix: "+",
    },
    {
      icon: <FaStar className="text-3xl" />,
      label: "Successful Recoveries",
      value: 98,
      suffix: "%",
    },
  ];

  const ref = React.useRef(null);
  const [counts, setCounts] = React.useState(stats.map(() => 0));
  const animatedRef = React.useRef(false);

  React.useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
    // eslint-disable-next-line
  }, []);

  function easeOutQuad(t) {
    return t * (2 - t);
  }

  function startAnimation() {
    const duration = 1400;
    const startTime = performance.now();
    const to = stats.map((s) => s.value);

    function frame(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = easeOutQuad(progress);

      const next = to.map((target) => Math.floor(target * eased));
      setCounts(next);

      if (progress < 1) requestAnimationFrame(frame);
      else setCounts(to);
    }

    requestAnimationFrame(frame);
  }

  return (
    <section className="w-full py-10 flex justify-center bg-white">
      <div
        ref={ref}
        className="bg-cyan-800 rounded-2xl p-6 md:p-10 w-[92%] max-w-6xl shadow"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center space-y-2">
              <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-blue-50 text-cyan-600">
                {item.icon}
              </div>
              <p className="text-sm text-white">{item.label}</p>
              <h3 className="text-2xl md:text-3xl font-semibold text-white">
                {formatNumber(counts[idx])}
                {item.suffix}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
