export default function BlogSidebar() {
  return (
    <div className="bg-white p-5 rounded-xl shadow sticky top-24">
      <h3 className="font-semibold text-lg mb-4">Categories</h3>

      <ul className="space-y-2">
        <li className="text-gray-700 hover:text-cyan-600 cursor-pointer">Business</li>
        <li className="text-gray-700 hover:text-cyan-600 cursor-pointer">Design</li>
        <li className="text-gray-700 hover:text-cyan-600 cursor-pointer">Marketing</li>
        <li className="text-gray-700 hover:text-cyan-600 cursor-pointer">Technology</li>
      </ul>
    </div>
  );
}
