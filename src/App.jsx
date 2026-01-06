import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import ScrollToTop from "./components/ScrollToTop";

// Public Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Testimonials from "./pages/Testimonials";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";

// Centre Pages
import KyraPhysiotherapyCentre from "./pages/KyraPhysiotherapyCentre";
import KaivalyaPhysiotherapyKendra from "./pages/KaivalyaPhysiotherapyKendra";

// Admin Pages
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <FloatingButtons />

      <Routes>
        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />

        {/* Centre Pages */}
        <Route
          path="/kyra-physiotherapy-centre"
          element={<KyraPhysiotherapyCentre />}
        />
        <Route
          path="/kaivalya-physiotherapy-kendra"
          element={<KaivalyaPhysiotherapyKendra />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
