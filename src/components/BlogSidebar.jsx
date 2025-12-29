import { useState } from "react";

export default function BlogSidebar({
  blogs,
  selectedCategory,
  setSelectedCategory,
  searchTerm,
  setSearchTerm,
}) {
  const [showSuggestions, setShowSuggestions] = useState(false);

  const categories = [
    "All",
    "Physiotherapy",
    "Pain Management",
    "Sports Injury",
    "Rehabilitation",
    "Posture & Ergonomics",
    "Exercise & Fitness",
    "Other",
  ];

  const suggestions = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white p-5 rounded-xl shadow sticky top-24 space-y-6">
      {/* SEARCH */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setShowSuggestions(true);
          }}
          className="w-full px-4 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-cyan-500 outline-none"
        />

        {showSuggestions && searchTerm && suggestions.length > 0 && (
          <ul className="absolute z-20 mt-1 w-full bg-white border rounded-lg shadow max-h-48 overflow-y-auto">
            {suggestions.slice(0, 5).map((blog) => (
              <li
                key={blog.id}
                onClick={() => {
                  setSearchTerm(blog.title);
                  setShowSuggestions(false);
                }}
                className="px-4 py-2 text-sm cursor-pointer hover:bg-cyan-50"
              >
                {blog.title}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* CATEGORIES */}
      <div>
        <h3 className="font-semibold text-lg mb-4">Categories</h3>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`cursor-pointer font-medium ${
                selectedCategory === cat
                  ? "text-cyan-600"
                  : "text-gray-700 hover:text-cyan-600"
              }`}
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
