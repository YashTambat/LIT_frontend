// import React from "react";

// const Navbar: React.FC = () => {
//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
//         <h1 className="text-xl font-bold text-blue-600">Profile</h1>
//         <div className="space-x-4">
//           <button className="px-4 py-1 rounded-lg bg-blue-500 text-white">Sign In</button>
//           <button className="px-4 py-1 rounded-lg border border-blue-500 text-blue-500">Sign Up</button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;















import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">
          Profile
        </Link>
        <div className="space-x-4">
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="px-4 py-1 rounded-lg bg-red-500 text-white hover:bg-red-600"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-1 rounded-lg bg-blue-500 text-white"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="px-4 py-1 rounded-lg border border-blue-500 text-blue-500"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
