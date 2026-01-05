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
      <div className="max-w-7xl mx-auto px-4 mt-8">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-cyan-600 font-medium hover:underline"
        >
          <FiArrowLeft /> Back
        </button>
      </div>

      {/* TOP FULL WIDTH IMAGE */}
      {blog.image && (
        <div className="max-w-7xl mx-auto px-4 mt-6">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-[420px] object-cover rounded-xl shadow-md"
          />
        </div>
      )}

      {/* CONTENT + VIDEO SECTION */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-4">
            {/* CATEGORY */}
            {blog.category && (
              <span className="inline-flex items-center gap-2 bg-cyan-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                <FiTag /> {blog.category}
              </span>
            )}

            {/* TITLE */}
            <h1 className="text-3xl md:text-4xl font-bold">
              {blog.title}
            </h1>

            {/* AUTHOR / DATE */}
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <FiCalendar />
              {blog.date || "Grace Physiotherapy"}
            </div>

            {/* DESCRIPTION / CONTENT */}
            <article
              className="prose prose-cyan max-w-none pt-4"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>

          {/* RIGHT VIDEO BOX */}
          {blog.video && getYoutubeEmbed(blog.video) && (
            <div className="w-full">
              <div className="bg-slate-800 rounded-xl p-4 shadow-lg">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src={getYoutubeEmbed(blog.video)}
                    className="w-full h-full"
                    allowFullScreen
                    title="YouTube Video"
                  ></iframe>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
