import PhysioServices from "../components/PhysioServices";
import ServiceSection from "../components/ServiceSection";
import useScrollFade from "../hooks/useScrollFade";  

export default function Service() {
  useScrollFade();
  return (
    <>

      <section
  className="relative w-full h-[50vh] bg-center bg-cover flex items-center justify-center -mt-16 sm:-mt-4"
  style={{ backgroundImage: "url('https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/03/senior-man-lift-a-dumbbell-he-doing-treatment-exercise-with-his-physiotherapist-1296x728-header.jpg?w=1155&h=1528')" }}  // change image
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-cyan-600/50"></div>

  {/* Heading */}
  <div className="relative z-10 text-center">
    <h1 className="text-white text-5xl font-bold">Service</h1>
  </div>
</section>

      <PhysioServices />
      <ServiceSection />

    </>
  );
}
