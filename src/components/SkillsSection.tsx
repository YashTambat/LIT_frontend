import React from "react";
import { useProfile } from "./context/ProfileContext";

const SkillsSection: React.FC = () => {
  const { profile, loading } = useProfile();

  if (loading) {
    return <p>Loading skills...</p>;
  }

  if (!profile || !profile.skills || profile.skills.length === 0) {
    return <p>No skills found.</p>;
  }

  return (
    <section className="bg-white rounded-2xl shadow p-6">
      <h3 className="text-lg font-semibold mb-4">Top Skills</h3>
      <div className="flex flex-wrap gap-4">
        {profile.skills.map((skill) => (
          <div
            key={skill.skillName}
            className="flex flex-col items-center p-3 bg-blue-50 rounded-lg shadow-sm w-40"
          >
            <span className="text-sm font-medium text-blue-700">{skill.skillName}</span>
            <span className="text-xs text-gray-500">{skill.level}</span>
            <span className="text-xs text-gray-600 mt-1">⭐ {skill.endorsements}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
