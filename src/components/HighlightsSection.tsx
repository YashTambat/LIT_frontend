import React from "react";
import { useProfile } from "./context/ProfileContext";

const HighlightsSection: React.FC = () => {
  const { profile, loading } = useProfile();

  if (loading) {
    return <p>Loading highlights...</p>;
  }

  if (!profile || !profile.highlights || profile.highlights.length === 0) {
    return <p>No highlights found.</p>;
  }

  return (
    <section className="bg-white rounded-2xl shadow p-6">
      <h3 className="text-lg font-semibold mb-6">Highlights</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {profile.highlights.map((item) => (
          <div
            key={item.label}
            className="bg-blue-50 p-4 rounded-lg text-center hover:bg-blue-100 transition-colors duration-300"
          >
            <p className="text-2xl font-bold text-blue-600">{item.value}</p>
            <p className="text-sm text-gray-600 mt-1">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HighlightsSection;
