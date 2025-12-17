import useScrollFade from "../hooks/useScrollFade";
import GetAppointment from "../components/GetAppointment";

export default function Contact() {
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
          <h1 className="text-white text-5xl font-bold">Contact</h1>
        </div>
      </section>

      {/* Contact Section Component */}
      <GetAppointment />
    </>
  );
}
