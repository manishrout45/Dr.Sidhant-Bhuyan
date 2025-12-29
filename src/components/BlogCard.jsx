import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  if (!blog) return null; // safety check

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col h-full">
      {/* Image */}
      <img
        src={blog.image || "/placeholder.jpg"} // ✅ use Cloudinary URL directly
        alt={blog.title}
        className="w-full h-56 object-cover rounded-t-xl"
      />

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <p className="text-sm text-cyan-600 font-medium">{blog.category}</p>

        <h3 className="text-xl font-semibold mt-2">{blog.title}</h3>

        <p className="text-gray-600 mt-2 line-clamp-3">
          {blog.description}
        </p>

        {/* Fixed Bottom Button */}
        <Link
          to={`/blogs/${blog._id}`} // use MongoDB _id
          className="mt-auto inline-flex items-center gap-2 text-cyan-600 font-medium hover:text-cyan-700 transition pt-4"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}
