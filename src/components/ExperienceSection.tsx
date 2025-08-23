import React from "react";

const experiences = [
  { role: "Content Creator", company: "Bridge Media", location: "Bangalore", date: "Feb 2024 - Present" },
  { role: "Product Management", company: "IPL", location: "Bangalore", date: "Feb 2022 - Mar 2023" },
  { role: "Graphic Designer", company: "By the Gram", location: "Mumbai", date: "Dec 2021 - Dec 2021" },
];

const ExperienceSection: React.FC = () => {
  return (
    <section className="bg-white rounded-2xl shadow p-6">
      <h3 className="text-lg font-semibold mb-4">Experiences</h3>
      <ul className="space-y-4">
        {experiences.map((exp, i) => (
          <li key={i} className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold">{exp.role}</h4>
            <p className="text-gray-600">{exp.company} - {exp.location}</p>
            <p className="text-sm text-gray-500">{exp.date}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ExperienceSection;
