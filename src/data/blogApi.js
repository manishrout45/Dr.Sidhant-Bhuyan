const API = import.meta.env.VITE_API_URL || "https://dr-sidhant-backend.onrender.com";

// Get all blogs
export const getBlogs = async () => {
  const res = await fetch(`${API}/blogs`);
  return res.json();
};

// Get single blog
export const getBlog = async (id) => {
  const res = await fetch(`${API}/blogs/${id}`);
  return res.json();
};

// Admin login
export const loginAdmin = async (data) => {
  const res = await fetch(`${API}/admin/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

// Add blog (with image file)
export const addBlog = async (blog) => {
  const formData = new FormData();
  formData.append("title", blog.title);
  formData.append("description", blog.description);
  formData.append("content", blog.content || "");
  formData.append("category", blog.category || "");
  formData.append("video", blog.video || "");

  if (blog.image instanceof File) {
    formData.append("image", blog.image);
  }

  const res = await fetch(`${API}/blogs`, {
    method: "POST",
    body: formData,
  });

  return res.json();
};

// Update blog (with optional new image)
export const updateBlog = async (id, blog) => {
  const formData = new FormData();
  formData.append("title", blog.title);
  formData.append("description", blog.description);
  formData.append("content", blog.content || "");
  formData.append("category", blog.category || "");
  formData.append("video", blog.video || "");

  if (blog.image instanceof File) {
    formData.append("image", blog.image);
  }

  const res = await fetch(`${API}/blogs/${id}`, {
    method: "PUT",
    body: formData,
  });

  return res.json();
};

// Delete blog
export const deleteBlog = async (id) => {
  const res = await fetch(`${API}/blogs/${id}`, {
    method: "DELETE",
  });
  return res.json();
};
