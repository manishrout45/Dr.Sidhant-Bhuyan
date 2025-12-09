import PageHeader from "../components/PageHeader";

export default function About() {
  return (
    <>
      <PageHeader title="About Us" />

      <div className="max-w-4xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
        <p className="text-gray-600 leading-relaxed">
          We are a team of content creators passionate about writing modern,
          informative, and engaging blogs...
        </p>
      </div>
    </>
  );
}
