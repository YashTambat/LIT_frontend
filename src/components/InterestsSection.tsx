import React from "react";
import { useProfile } from "./context/ProfileContext";

const InterestsSection: React.FC = () => {
  const { profile, loading } = useProfile();

  if (loading) {
    return <p>Loading interests...</p>;
  }

  if (!profile || !profile.interests || profile.interests.length === 0) {
    return <p>No interests found.</p>;
  }

  return (
    <section className="bg-white rounded-2xl shadow p-6">
      <h3 className="text-lg font-semibold mb-4">Interests</h3>
      <div className="flex flex-wrap gap-3">
        {profile.interests.map((interest, i) => (
          <span
            key={i}
            className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium shadow-sm hover:bg-green-200 transition-all"
          >
            {interest}
          </span>
        ))}
      </div>
    </section>
  );
};

export default InterestsSection;
