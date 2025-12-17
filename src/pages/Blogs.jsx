import { useState } from "react";
import BlogCard from "../components/BlogCard";
import BlogSidebar from "../components/BlogSidebar";
import { blogData } from "../data/blogData";

export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBlogs = blogData.filter((blog) => {
    const matchCategory =
      selectedCategory === "All" || blog.category === selectedCategory;

    const matchSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <>
          <section
  className="relative w-full h-[50vh] bg-center bg-cover flex items-center justify-center -mt-16 sm:-mt-4"
  style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/background-clouds-fractal-foam-abstract-lights-subject-art-spirituality-painting-music-visual-effects-creative-technologies_27525-14339.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80')" }}  // change image
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-cyan-600/50"></div>

  {/* Heading */}
  <div className="relative z-10 text-center">
    <h1 className="text-white text-5xl font-bold">Blogs</h1>
  </div>
</section>
      {/* BLOG GRID */}
      <div className="max-w-7xl mx-auto px-4 py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-3 grid sm:grid-cols-2 gap-6">
          {filteredBlogs.length ? (
            filteredBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))
          ) : (
            <p className="text-gray-500">No blogs found.</p>
          )}
        </div>

        <BlogSidebar
          blogData={blogData}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>
    </>
  );
}
