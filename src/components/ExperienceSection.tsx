import React from "react";
import { useProfile } from "./context/ProfileContext";

const ExperienceSection: React.FC = () => {
  const { profile, loading } = useProfile();

  if (loading) {
    return <p>Loading experiences...</p>;
  }

  if (!profile || !profile.experiences || profile.experiences.length === 0) {
    return <p>No experiences found.</p>;
  }

  return (
    <section className="bg-white rounded-2xl shadow p-6">
      <h3 className="text-lg font-semibold mb-6">Experiences</h3>
      <ul className="relative border-l-2 border-gray-200">
        {profile.experiences.map((exp) => (
          <li key={exp.role} className="mb-8 ml-6">
            <span className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2.5 border border-white"></span>
            <h4 className="text-md font-semibold text-gray-800">{exp.role}</h4>
            <p className="text-gray-600">{exp.company} - {exp.location}</p>
            <p className="text-sm text-gray-500">{exp.dateRange}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ExperienceSection;
