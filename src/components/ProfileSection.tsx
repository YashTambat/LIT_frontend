import React from "react";

const ProfileSection: React.FC = () => {
  return (
    <section className="bg-white rounded-2xl shadow p-6 flex flex-col md:flex-row items-center gap-6">
      {/* Image Placeholder */}
      <div className="w-32 h-32 bg-gray-300 rounded-full"></div>

      <div>
        <h2 className="text-2xl font-semibold">John Doe</h2>
        <p className="text-gray-600">Symbiosis, Pune</p>
        <p className="mt-2 text-gray-700 max-w-md">
          A proactive student passionate about entrepreneurship & innovation. I’m a
          problem solver with a talent for generating innovative ideas.
        </p>
      </div>
    </section>
  );
};

export default ProfileSection;
