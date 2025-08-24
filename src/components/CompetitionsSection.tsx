import React from "react";
import { useProfile } from "./context/ProfileContext";

const EndorsementsSection: React.FC = () => {
  const { profile, loading } = useProfile();

  if (loading) {
    return <p>Loading endorsements...</p>;
  }

  if (!profile || !profile.endorsements || profile.endorsements.length === 0) {
    return <p>No endorsements found.</p>;
  }

  return (
    <section className="bg-white rounded-2xl shadow p-6">
      <h3 className="text-lg font-semibold mb-6">Endorsements</h3>
      <div className="space-y-4">
        {profile.endorsements.map((endorse) => (
          <div
            key={endorse.reviewerName}
            className="border p-4 rounded-lg flex gap-4 items-start hover:shadow-lg transition-shadow duration-300"
          >
            {/* Profile image placeholder */}
            <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0"></div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-800">{endorse.reviewerName}</h4>
              <p className="text-sm text-gray-500">{endorse.reviewerRole}</p>
              <p className="text-sm text-blue-600 mt-1">
                Skills: {endorse.skills.join(", ")}
              </p>
              <p className="text-sm text-yellow-500 mt-1">⭐ {endorse.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EndorsementsSection;
