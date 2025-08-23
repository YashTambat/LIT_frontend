import React from "react";

const FeedbackSection: React.FC = () => {
  return (
    <section className="bg-white rounded-2xl shadow p-6">
      <h3 className="text-lg font-semibold mb-4">Feedback</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {/* Feedback text card */}
        <div className="border rounded-lg p-4">
          <p className="text-gray-700">
            Always be open to changes as festing is a stressful and dynamic environment.
          </p>
          <p className="mt-2 text-sm text-gray-500">- Mansoor Masood</p>
        </div>

        {/* Feedback media placeholder */}
        <div className="border rounded-lg p-4 flex items-center justify-center">
          <div className="w-full h-32 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">Media Placeholder</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
