import BlogCard from "../components/BlogCard";
import BlogSidebar from "../components/BlogSidebar";
import PageHeader from "../components/PageHeader";
import { blogData } from "../data/blogData";

export default function Blogs() {
  return (
    <>
      <PageHeader title="Our Blogs" />

      <div className="max-w-7xl mx-auto px-4 py-14 grid md:grid-cols-4 gap-10">
        {/* Blog list */}
        <div className="md:col-span-3 grid sm:grid-cols-2 gap-6">
          {blogData.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {/* Sidebar */}
        <BlogSidebar />
      </div>
    </>
  );
}
