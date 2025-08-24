import React from "react";
import { useProfile } from "./context/ProfileContext";

const FeedbackSection: React.FC = () => {
  const { profile, loading } = useProfile();

  if (loading) {
    return <p>Loading feedback...</p>;
  }

  if (!profile || !profile.feedbacks || profile.feedbacks.length === 0) {
    return <p>No feedback found.</p>;
  }

  return (
    <section className="bg-white rounded-2xl shadow p-6">
      <h3 className="text-lg font-semibold mb-6">Feedback</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {profile.feedbacks.map((fb) => (
          <div
            key={fb.reviewerName}
            className="border rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <p className="text-gray-700 mb-3">{fb.text}</p>

            {fb.mediaUrl && fb.mediaUrl.endsWith(".mp4") ? (
              <video
                src={fb.mediaUrl}
                controls
                className="w-full rounded-md mb-3"
              />
            ) : fb.mediaUrl ? (
              <img
                src={fb.mediaUrl}
                alt="feedback media"
                className="w-full rounded-md mb-3"
              />
            ) : null}

            <div className="flex justify-between items-center mt-2">
              <p className="text-sm text-gray-500">- {fb.reviewerName}</p>
              <p className="text-sm text-yellow-500">⭐ {fb.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeedbackSection;
