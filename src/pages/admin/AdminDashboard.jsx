import { useEffect, useState } from "react";
import { getBlogs, addBlog, deleteBlog, updateBlog } from "../../data/blogApi";

export default function AdminDashboard() {
  const [blogs, setBlogs] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);
  const [editId, setEditId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    title: "",
    category: "",
    description: "",
    image: null,
    video: "",
    content: "",
  });

  const categories = [
    "Physiotherapy",
    "Pain Management",
    "Sports Injury",
    "Rehabilitation",
    "Posture & Ergonomics",
    "Exercise & Fitness",
    "Other",
  ];

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const data = await getBlogs();
    setBlogs(data);
    console.log(data); // Debug: check Cloudinary URLs
  };

  const getYoutubeEmbed = (url) => {
    if (!url) return null;
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : null;
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setForm({ ...form, image: file });
    setImagePreview(URL.createObjectURL(file));
  };

  const submit = async () => {
    if (!form.title || !form.description) return alert("Required fields missing");

    editId ? await updateBlog(editId, form) : await addBlog(form);
    resetForm();
    fetchBlogs();
  };

  const handleEdit = (blog) => {
    setEditId(blog._id);
    setForm({ ...blog, image: null });
    setImagePreview(blog.image); // ✅ Cloudinary URL
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetForm = () => {
    setForm({
      title: "",
      category: "",
      description: "",
      image: null,
      video: "",
      content: "",
    });
    setImagePreview(null);
    setEditId(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 py-12 px-4 -mt-8">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-gray-900 tracking-tight">
            Blog Admin Panel
          </h2>
          <p className="text-gray-500 mt-3 text-lg">
            Create, manage & publish your content
          </p>
        </div>

        {/* TOGGLE BUTTON */}
        <div className="text-right mb-8">
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:scale-105 transition"
          >
            {showForm ? "View All Blogs" : "Create New Blog"}
          </button>
        </div>

        {/* BLOG FORM SECTION */}
        {showForm && (
          <div className="bg-white/80 backdrop-blur-xl border rounded-3xl shadow-2xl p-8 mb-16">
            <h3 className="text-3xl font-bold mb-6 text-gray-800">
              📝 {editId ? "Update Blog" : "Create Blog"}
            </h3>

            {/* IMAGE UPLOAD */}
            <label className="group block cursor-pointer mb-6">
              <input type="file" hidden accept="image/*" onChange={handleImageUpload} />
              <div className="relative border-2 border-dashed border-blue-400 rounded-2xl h-64 flex items-center justify-center overflow-hidden hover:border-blue-600 transition">
                {imagePreview ? (
                  <img src={imagePreview} className="w-full h-full object-cover rounded-2xl" />
                ) : (
                  <div className="text-center text-gray-400">
                    <p className="text-lg font-semibold">Upload Cover Image</p>
                    <p className="text-sm">PNG, JPG, WEBP</p>
                  </div>
                )}
              </div>
            </label>

            {/* INPUTS */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                placeholder="Blog Title"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
              />

              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
              >
                <option value="">Select Category</option>
                {categories.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>

            <input
              placeholder="Short Description"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="mt-4 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm w-full"
            />

            {/* VIDEO */}
            <div className="mt-4 p-4 rounded-xl bg-gray-50 border border-gray-200">
              <input
                placeholder="YouTube Video Link"
                value={form.video}
                onChange={(e) => setForm({ ...form, video: e.target.value })}
                className="px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm w-full"
              />
              {getYoutubeEmbed(form.video) && (
                <div className="mt-4 aspect-video rounded-lg overflow-hidden shadow-inner">
                  <iframe src={getYoutubeEmbed(form.video)} className="w-full h-full" />
                </div>
              )}
            </div>

            <textarea
              rows="6"
              placeholder="Full Blog Content"
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              className="mt-4 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm w-full resize-none"
            />

            <div className="flex gap-4 mt-6">
              <button
                onClick={submit}
                className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:scale-105 transition"
              >
                {editId ? "Update Blog" : "Publish Blog"}
              </button>

              {editId && (
                <button
                  onClick={resetForm}
                  className="px-6 py-3 rounded-xl border text-gray-600 hover:bg-gray-100"
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        )}

        {/* BLOG LIST SECTION */}
        {!showForm && (
          <div>
            <h3 className="text-3xl font-bold mb-8 text-gray-800">
              Published Blogs ({blogs.length})
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {blogs.map((b) => (
                <div
                  key={b._id}
                  className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 hover:scale-105 overflow-hidden flex flex-col"
                >
                  {/* ✅ FIXED: Cloudinary URL directly */}
                  <img
                    src={b.image}
                    alt={b.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-5 flex flex-col flex-1">
                    <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full w-fit">
                      {b.category}
                    </span>
                    <h4 className="font-semibold mt-2 line-clamp-2">{b.title}</h4>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">{b.description}</p>
                    <div className="flex gap-3 mt-auto pt-5">
                      <button
                        onClick={() => handleEdit(b)}
                        className="flex-1 border border-blue-500 text-blue-600 rounded-xl py-2 hover:bg-blue-50 transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteBlog(b._id)}
                        className="flex-1 border border-red-500 text-red-500 rounded-xl py-2 hover:bg-red-50 transition"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
