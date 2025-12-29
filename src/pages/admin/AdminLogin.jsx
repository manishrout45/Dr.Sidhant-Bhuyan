import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiUser, FiLock } from "react-icons/fi";

const API =
  import.meta.env.VITE_API_URL ||
  "https://dr-sidhant-backend.onrender.com";


export default function AdminLogin() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submit = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${API}/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok && data?.success) {
        navigate("/admin/dashboard");
      } else if (res.status === 401) {
        setError("Invalid username or password");
      } else {
        setError(data?.error || "Something went wrong");
      }
    } catch {
      setError("Unable to reach server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 -mt-10">
      
      {/* CARD */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        {/* HEADER */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Admin Login
          </h2>
          <p className="text-gray-500 mt-1">
            Sign in to manage your content
          </p>
        </div>

        {/* ERROR */}
        {error && (
          <div className="mb-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-2">
            {error}
          </div>
        )}

        {/* USERNAME */}
        <div className="relative mb-5">
          <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={(e) =>
              setForm({ ...form, username: e.target.value })
            }
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* PASSWORD */}
        <div className="relative mb-6">
          <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* BUTTON */}
        <button
          onClick={submit}
          disabled={loading}
          className="w-full py-3 rounded-lg text-white font-semibold bg-blue-600 hover:bg-blue-700 transition disabled:opacity-60"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* FOOTER */}
        <p className="text-center text-xs text-gray-400 mt-6">
          © {new Date().getFullYear()} Admin Panel
        </p>
      </div>
    </div>
  );
}
