import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-56 object-cover rounded-t-xl"
      />

      <div className="p-4">
        <p className="text-sm text-cyan-600 font-medium">{blog.category}</p>

        <h3 className="text-xl font-semibold mt-2">{blog.title}</h3>
        <p className="text-gray-600 mt-2">{blog.description}</p>

        <Link
          to={`/blogs/${blog.id}`}
          className="mt-4 inline-block text-cyan-600 font-medium"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}
