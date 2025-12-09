import { useParams } from "react-router-dom";
import { blogData } from "../data/blogData";
import PageHeader from "../components/PageHeader";

export default function BlogDetails() {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === id);

  if (!blog) return <h2 className="text-center py-20">Blog not found.</h2>;

  return (
    <>
      <PageHeader title={blog.title} />

      <div className="max-w-4xl mx-auto px-4 py-14">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-96 object-cover rounded-xl"
        />

        <p className="text-gray-500 mt-4">{blog.date}</p>

        <div
          className="mt-6 prose prose-lg"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </>
  );
}
