import React from "react";

const interests = ["Masterchef", "Baking", "Dessert", "Kathak", "Entrepreneurship"];

const InterestsSection: React.FC = () => {
  return (
    <section className="bg-white rounded-2xl shadow p-6">
      <h3 className="text-lg font-semibold mb-4">Interests</h3>
      <div className="flex flex-wrap gap-2">
        {interests.map((item, i) => (
          <span key={i} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
};

export default InterestsSection;
