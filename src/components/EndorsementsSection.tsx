import React from "react";
import { useProfile } from "./context/ProfileContext";

const EndorsementsSection: React.FC = () => {
  const { profile, loading } = useProfile();

  if (loading) {
    return (
      <section className="bg-white rounded-2xl shadow p-6">
        <p className="text-gray-500">Loading endorsements...</p>
      </section>
    );
  }

  if (!profile || !profile.endorsements || profile.endorsements.length === 0) {
    return (
      <section className="bg-white rounded-2xl shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Endorsements</h3>
        <p className="text-gray-500">No endorsements available</p>
      </section>
    );
  }

  return (
    <section className="bg-white rounded-2xl shadow p-6">
      <h3 className="text-lg font-semibold mb-4">Endorsements</h3>
      <div className="space-y-4">
        {profile.endorsements.map((endorse, i) => (
          <div key={i} className="border p-4 rounded-lg flex gap-4 items-center">
            {/* Reviewer profile image placeholder */}
            <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-500 text-xs">
              Img
            </div>
            <div>
              <h4 className="font-semibold">{endorse.reviewerName}</h4>
              <p className="text-sm text-gray-600">{endorse.reviewerRole}</p>
              <p className="text-sm text-blue-500">{endorse.skills?.join(", ")}</p>
              {endorse.rating !== undefined && (
                <p className="text-sm text-yellow-600">⭐ {endorse.rating}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EndorsementsSection;
