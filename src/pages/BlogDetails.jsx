import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiCalendar, FiTag, FiArrowLeft } from "react-icons/fi";
import { getBlog } from "../data/blogApi";

export default function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    getBlog(id).then(setBlog);
  }, [id]);

  // Convert YouTube link to embed URL
  const getYoutubeEmbed = (url) => {
    if (!url) return null;
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : null;
  };

  if (!blog) {
    return (
      <h2 className="text-center py-20 text-xl text-gray-500">
        Loading blog...
      </h2>
    );
  }

  return (
    <>
      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-2 text-cyan-600 font-medium mt-10 px-4 hover:underline"
      >
        <FiArrowLeft /> Back
      </button>

      <section className="max-w-5xl mx-auto px-4 py-10 space-y-8">
        {/* IMAGE */}
        {blog.image && (
          <img
            src={blog.image} // ✅ use full Cloudinary URL directly
            alt={blog.title}
            className="w-full h-[420px] md:h-[500px] object-cover rounded-xl shadow-lg"
          />
        )}

        {/* CATEGORY */}
        {blog.category && (
          <span className="inline-flex items-center gap-2 mt-4 bg-cyan-600 text-white px-4 py-1 rounded-full text-sm font-medium">
            <FiTag /> {blog.category}
          </span>
        )}

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold mt-4">{blog.title}</h1>

        {/* DATE */}
        <div className="flex items-center gap-2 text-gray-500 text-sm mt-2">
          <FiCalendar /> {blog.date || "Grace Physiotherapy"}
        </div>

        {/* CONTENT */}
        <article
          className="prose prose-cyan max-w-none mt-8"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* YOUTUBE VIDEO AT END */}
        {blog.video && getYoutubeEmbed(blog.video) && (
          <div className="mt-10 aspect-video rounded-xl overflow-hidden shadow-lg border">
            <iframe
              src={getYoutubeEmbed(blog.video)}
              className="w-full h-full"
              allowFullScreen
              title="YouTube Video"
            ></iframe>
          </div>
        )}
      </section>
    </>
  );
}
