// import React from "react";
// import { Link } from "react-router-dom";
// import { FaHome, FaFire, FaCompass, FaFilm } from "react-icons/fa";

// const Sidebar: React.FC = () => {
//   return (
//     <div className="fixed top-[200px] left-0 w-64 h-auto bg-gray-900 text-gray-300 flex flex-col items-start p-4">
//       <nav className="space-y-6">
//         {/* Home */}
//         <Link
//           to="/"
//           className="flex items-center space-x-4 hover:text-white cursor-pointer"
//         >
//           <FaHome size={20} />
//           <span className="text-sm font-medium">Home</span>
//         </Link>

//         {/* Trending */}
//         <Link
//           to="/trending"
//           className="flex items-center space-x-4 hover:text-white cursor-pointer"
//         >
//           <FaFire size={20} />
//           <span className="text-sm font-medium">Trending</span>
//         </Link>

//         {/* Explore */}
//         <Link
//           to="/explore"
//           className="flex items-center space-x-4 hover:text-white cursor-pointer"
//         >
//           <FaCompass size={20} />
//           <span className="text-sm font-medium">Explore</span>
//         </Link>

//         {/* Movies */}
//         <Link
//           to="/popular"
//           className="flex items-center space-x-4 hover:text-white cursor-pointer"
//         >
//           <FaFilm size={20} />
//           <span className="text-sm font-medium">Movies</span>
//         </Link>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;

import React from "react";
import { FaHome, FaFire, FaCompass, FaFilm } from "react-icons/fa";
import { Link } from "react-router";

const Sidebar: React.FC = () => {
  return (
    <div className="fixed top-[200px] left-0 w-64 h-auto bg-gray-900 text-gray-300 flex flex-col items-start p-4">
      <nav className="space-y-6">
        {/* Home */}
        <button className="flex items-center space-x-4 hover:text-white cursor-pointer">
          <FaHome size={20} />
        </button>
        <span className="text-sm font-medium">Home</span>

        {/* Trending */}
        <button className="flex items-center space-x-4 hover:text-white cursor-pointer">
          <FaFire size={20} />
        </button>
        <span className="text-sm font-medium">Trending</span>

        {/* Explore */}
        <button className="flex items-center space-x-4 hover:text-white cursor-pointer">
          <FaCompass size={20} />
        </button>
        <span className="text-sm font-medium">Explore</span>

        {/* Movies */}

        <button className="flex items-center space-x-4 hover:text-white cursor-pointer">
          <Link to="/popular">
            <FaFilm size={20} />
          </Link>
        </button>
        <span className="text-sm font-medium">Movies</span>
      </nav>
    </div>
  );
};

export default Sidebar;
