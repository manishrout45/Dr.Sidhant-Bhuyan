import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import BlogSidebar from "../components/BlogSidebar";
import { getBlogs } from "../data/blogApi";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getBlogs().then(setBlogs);
  }, []);

  const filteredBlogs = blogs.filter((blog) => {
    const matchCategory =
      selectedCategory === "All" || blog.category === selectedCategory;

    const matchSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.description?.toLowerCase().includes(searchTerm.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <>
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
          blogs={blogs}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>
    </>
  );
}
