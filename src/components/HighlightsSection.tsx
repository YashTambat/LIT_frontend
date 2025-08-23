import React from "react";

const highlights = [
  { label: "Endorsements", value: 22 },
  { label: "Feedbacks", value: 12 },
  { label: "Placements", value: 4 },
  { label: "Top Rated", value: 28 },
];

const HighlightsSection: React.FC = () => {
  return (
    <section className="bg-white rounded-2xl shadow p-6">
      <h3 className="text-lg font-semibold mb-4">Highlights</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {highlights.map((item, i) => (
          <div key={i} className="bg-gray-100 p-4 rounded-lg text-center">
            <p className="text-2xl font-bold text-blue-600">{item.value}</p>
            <p className="text-sm text-gray-600">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HighlightsSection;
