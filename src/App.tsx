// import React from "react";
// import Navbar from "./components/Navbar";
// import ProfileSection from "./components/ProfileSection";
// import SkillsSection from "./components/SkillsSection";
// import ExperienceSection from "./components/ExperienceSection";
// import InterestsSection from "./components/InterestsSection";
// import CompetitionsSection from "./components/CompetitionsSection";
// import EndorsementsSection from "./components/EndorsementsSection";
// import HighlightsSection from "./components/HighlightsSection";
// import FeedbackSection from "./components/FeedbackSection";

// const App: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />
//       <div className="max-w-6xl mx-auto px-4 py-6 space-y-10">
//         <ProfileSection />
//         <SkillsSection />
//         <ExperienceSection />
//         <InterestsSection />
//         <CompetitionsSection />
//         <EndorsementsSection />
//         <HighlightsSection />
//         <FeedbackSection />
//       </div>
//     </div>
//   );
// };

// export default App;



import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProfileSection from "./components/ProfileSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import InterestsSection from "./components/InterestsSection";
import CompetitionsSection from "./components/CompetitionsSection";
import EndorsementsSection from "./components/EndorsementsSection";
import HighlightsSection from "./components/HighlightsSection";
import FeedbackSection from "./components/FeedbackSection";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { ProfileProvider } from "./components/context/ProfileContext";

const App: React.FC = () => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  return (
    <Router>
      <ProfileProvider>
        <Navbar />
        <Routes>
          {/* Public */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected */}
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <div className="min-h-screen bg-gray-50">
                  <div className="max-w-6xl mx-auto px-4 py-6 space-y-10">
                    <ProfileSection />
                    <SkillsSection />
                    <ExperienceSection />
                    <InterestsSection />
                    <CompetitionsSection />
                    <EndorsementsSection />
                    <HighlightsSection />
                    <FeedbackSection />
                  </div>
                </div>
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
        </Routes>
      </ProfileProvider>
    </Router>
  );
};

export default App;

