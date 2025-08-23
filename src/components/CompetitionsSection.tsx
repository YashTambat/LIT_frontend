import React from "react";

const competitions = [
  { title: "Serial Storyteller", category: "Management", result: "1st Place" },
  { title: "Watermelon", category: "Creator Architect", result: "Top 10" },
];

const CompetitionsSection: React.FC = () => {
  return (
    <section className="bg-white rounded-2xl shadow p-6">
      <h3 className="text-lg font-semibold mb-4">Competitions / EPICs</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {competitions.map((comp, i) => (
          <div key={i} className="border rounded-lg p-4">
            <h4 className="font-semibold">{comp.title}</h4>
            <p className="text-sm text-gray-600">{comp.category}</p>
            <p className="text-sm text-blue-500">{comp.result}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompetitionsSection;
