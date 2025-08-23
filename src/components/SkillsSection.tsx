import React from "react";

const skills = ["Team Player", "Public Speaking", "Time Management", "Confidence", "Analytical Thinking"];

const SkillsSection: React.FC = () => {
  return (
    <section className="bg-white rounded-2xl shadow p-6">
      <h3 className="text-lg font-semibold mb-4">Top Skills</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <span key={i} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
