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
    if (!form.title || !form.description)
      return alert("Required fields missing");
    editId ? await updateBlog(editId, form) : await addBlog(form);
    resetForm();
    fetchBlogs();
  };

  const handleEdit = (blog) => {
    setEditId(blog._id);
    setForm({ ...blog, image: null });
    setImagePreview(blog.image);
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
    <div className="min-h-screen bg-slate-100 py-14 px-4 -mt-4">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
<div className="mb-12 relative rounded-3xl overflow-hidden">
  {/* Background Image */}
  <img
    src="https://img.freepik.com/premium-photo/cartoon-man-running-jungle_916191-284842.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80"
    alt="Blog Management Header"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/45" />

  {/* Content */}
  <div className="relative z-10 px-8 py-10 md:px-12 md:py-14 flex flex-col md:flex-row md:items-center md:justify-between">
    <div>
      <h2 className="text-4xl font-bold text-white">
        Blog Management
      </h2>
      <p className="text-slate-200 mt-2">
        Create, edit & manage your blog content
      </p>
    </div>

    {/* BUTTON — UNCHANGED */}
    <button
      onClick={() => setShowForm(!showForm)}
      className="mt-4 md:mt-0 px-6 py-3 rounded-xl bg-blue-600 text-white font-medium shadow-md hover:bg-blue-700 transition"
    >
      {showForm ? "View Blogs" : "Add New Blog"}
    </button>
  </div>
</div>


        {/* FORM */}
        {showForm && (
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-10 mb-20">

            {/* FORM HEADER */}
            <div className="mb-10 border-b pb-6">
              <h3 className="text-3xl font-bold text-slate-900">
                {editId ? "Update Blog Post" : "Create New Blog Post"}
              </h3>
              <p className="text-slate-500 mt-2">
                Fill in the information below to publish your article
              </p>
            </div>

            {/* IMAGE UPLOAD */}
            <div className="mb-10">
              <label className="block text-sm font-semibold text-slate-700 mb-3">
                Cover Image
              </label>

              <label className="cursor-pointer block">
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={handleImageUpload}
                />

                <div className="relative h-72 border-2 border-dashed border-slate-300 rounded-2xl flex items-center justify-center bg-slate-50 hover:border-blue-500 hover:bg-blue-50/40 transition">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                    />
                  ) : (
                    <div className="text-center">
                      <p className="text-blue-600 text-3xl mb-2">⬆</p>
                      <p className="font-medium text-slate-700">
                        Click to upload cover image
                      </p>
                      <p className="text-sm text-slate-400">
                        PNG, JPG, WEBP (1200×600 recommended)
                      </p>
                    </div>
                  )}
                </div>
              </label>
            </div>

            {/* BASIC INFO */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Blog Title
                </label>
                <input
                  value={form.title}
                  onChange={(e) =>
                    setForm({ ...form, title: e.target.value })
                  }
                  placeholder="Enter blog title"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Category
                </label>
                <select
                  value={form.category}
                  onChange={(e) =>
                    setForm({ ...form, category: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="">Select category</option>
                  {categories.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* DESCRIPTION */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Short Description
              </label>
              <input
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                placeholder="Short summary shown in blog listing"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* VIDEO */}
            <div className="mb-10 bg-slate-50 border rounded-2xl p-6">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                YouTube Video (Optional)
              </label>
              <input
                value={form.video}
                onChange={(e) =>
                  setForm({ ...form, video: e.target.value })
                }
                placeholder="https://youtube.com/watch?v=..."
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              {getYoutubeEmbed(form.video) && (
                <div className="mt-5 aspect-video rounded-xl overflow-hidden shadow">
                  <iframe
                    src={getYoutubeEmbed(form.video)}
                    className="w-full h-full"
                  />
                </div>
              )}
            </div>

            {/* CONTENT */}
            <div className="mb-12">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Blog Content
              </label>
              <textarea
                rows="8"
                value={form.content}
                onChange={(e) =>
                  setForm({ ...form, content: e.target.value })
                }
                placeholder="Write full blog content here..."
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
              />
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex gap-4 pt-6 border-t">
              <button
                onClick={submit}
                className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 hover:shadow-lg transition"
              >
                {editId ? "Update Blog" : "Publish Blog"}
              </button>

              {editId && (
                <button
                  onClick={resetForm}
                  className="px-8 py-4 rounded-xl border text-slate-600 hover:bg-slate-100 transition"
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        )}

        {/* BLOG LIST */}
        {!showForm && (
          <>
            <h3 className="text-2xl font-semibold text-slate-800 mb-8">
              Published Blogs ({blogs.length})
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
              {blogs.map((b) => (
                <div
                  key={b._id}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col"
                >
                  <img
                    src={b.image}
                    className="h-48 w-full object-cover"
                  />

                  <div className="p-5 flex flex-col flex-1">
                    <span className="text-xs font-medium bg-blue-50 text-blue-600 px-3 py-1 rounded-full w-fit">
                      {b.category}
                    </span>

                    <h4 className="mt-3 font-semibold text-slate-800 line-clamp-2">
                      {b.title}
                    </h4>

                    <p className="text-sm text-slate-500 mt-1 line-clamp-2">
                      {b.description}
                    </p>

                    <div className="mt-auto flex gap-3 pt-5">
                      <button
                        onClick={() => handleEdit(b)}
                        className="flex-1 py-2 rounded-lg border border-blue-500 text-blue-600 hover:bg-blue-50 transition"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => deleteBlog(b._id)}
                        className="flex-1 py-2 rounded-lg border border-red-500 text-red-500 hover:bg-red-50 transition"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
