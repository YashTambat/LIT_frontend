import React from "react";

const endorsements = [
  { name: "Mansoor Masood", role: "Communication Coach", skills: ["Communication", "Negotiation"] },
  { name: "Arpit S", role: "Product Manager at LYNC", skills: ["Marketing", "Strategy"] },
];

const EndorsementsSection: React.FC = () => {
  return (
    <section className="bg-white rounded-2xl shadow p-6">
      <h3 className="text-lg font-semibold mb-4">Endorsements</h3>
      <div className="space-y-4">
        {endorsements.map((endorse, i) => (
          <div key={i} className="border p-4 rounded-lg flex gap-4 items-center">
            {/* Profile image placeholder */}
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
            <div>
              <h4 className="font-semibold">{endorse.name}</h4>
              <p className="text-sm text-gray-600">{endorse.role}</p>
              <p className="text-sm text-blue-500">{endorse.skills.join(", ")}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EndorsementsSection;
