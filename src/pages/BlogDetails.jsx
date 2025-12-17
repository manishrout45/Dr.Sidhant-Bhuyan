import { useParams, useNavigate } from "react-router-dom";
import { blogData } from "../data/blogData";
import { FiCalendar, FiTag, FiArrowLeft } from "react-icons/fi";

export default function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = blogData.find((b) => b.id === id);

  if (!blog)
    return (
      <h2 className="text-center py-20 text-xl text-gray-500">
        Blog not found.
      </h2>
    );

  return (
    <>
{/* Hero Section */}
<section
  className="relative w-full h-[50vh] bg-center bg-cover flex items-center justify-center -mt-16 sm:-mt-4"
  style={{
    backgroundImage:
      "url('https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/03/senior-man-lift-a-dumbbell-he-doing-treatment-exercise-with-his-physiotherapist-1296x728-header.jpg?w=1155&h=1528')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-cyan-600/50"></div>

  {/* Heading */}
  <div className="relative z-10 text-center">
    <h1 className="text-white text-4xl md:text-5xl font-bold">
      {blog.category} Blogs
    </h1>
  </div>
</section>

      {/* MAIN CONTAINER */}
      <section className="max-w-5xl mx-auto px-4 py-14">

        {/* BACK BUTTON */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm font-medium text-cyan-600 hover:text-cyan-700 transition mb-6"
        >
          <FiArrowLeft size={16} />
          Back to Blogs
        </button>

        {/* FEATURE IMAGE */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-[420px] object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>

          {/* CATEGORY BADGE */}
          <span className="absolute top-5 left-5 bg-cyan-600 text-white text-sm px-4 py-1 rounded-full flex items-center gap-2">
            <FiTag size={14} />
            {blog.category}
          </span>
        </div>

        {/* META INFO */}
        <div className="flex flex-wrap items-center gap-6 mt-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <FiCalendar />
            <span>{blog.date}</span>
          </div>

          <div>
            <span className="font-medium text-gray-700">
              Grace Physiotherapy
            </span>
          </div>
        </div>

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold mt-6 leading-tight">
          {blog.title}
        </h1>

        {/* CONTENT */}
        <article
          className="mt-8 prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 prose-a:text-cyan-600 prose-strong:text-gray-800"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* DIVIDER */}
        <div className="mt-12 border-t pt-8 text-sm text-gray-500">
          <p>
            Need professional help? Book an appointment with our expert
            physiotherapists for personalized care.
          </p>
        </div>
      </section>
    </>
  );
}
