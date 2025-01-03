// function Sidebar() {
//   return (
//     <div className="w-60 h-screen bg-gray-800 text-white p-4">
//       <ul className="space-y-4">
//         <li className="flex items-center space-x-2">
//           <span>🏠</span> <span>Home</span>
//         </li>
//         <li className="flex items-center space-x-2">
//           <span>🔥</span> <span>Trending</span>
//         </li>
//         <li className="flex items-center space-x-2">
//           <span>🔍</span> <span>Explore</span>
//         </li>
//         <li className="flex items-center space-x-2">
//           <span>🎥</span> <span>Movies</span>
//         </li>
//         <li className="flex items-center space-x-2">
//           <span>❤️</span> <span>Favorite</span>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default Sidebar;

import React from "react";
import { FaHome, FaFire, FaCompass, FaFilm, FaHeart } from "react-icons/fa";

const Sidebar: React.FC = () => {
  return (
    // <div className="fixed top-[200px] left-0 w-64 h-auto bg-gray-900 text-gray-300 flex flex-col items-start p-4">
    <div className="fixed top-[200px] left-0 w-64 h-auto bg-gray-900 text-gray-300 flex flex-col items-start p-4">
      <nav className="space-y-6">
        {/* Home */}
        <button className="items-center">
          {/* <div className="flex space-x-4 hover:text-white cursor-pointer"> */}
          <FaHome size={20} />
          {/* </div> */}
          <span className="text-sm font-medium">Home</span>
        </button>
        {/* Trending */}
        <div className="flex items-center space-x-4 hover:text-white cursor-pointer">
          <FaFire size={20} />
        </div>
        <span className="text-sm font-medium">Trending</span>

        {/* Explore */}
        <div className="flex items-center space-x-4 hover:text-white cursor-pointer">
          <FaCompass size={20} />
        </div>
        <span className="text-sm font-medium">Explore</span>

        {/* Movies */}
        <div className="flex items-center space-x-4 hover:text-white cursor-pointer">
          <FaFilm size={20} />
        </div>
        <span className="text-sm font-medium">Movies</span>

        {/* Favorite */}
        <div className="flex items-center space-x-4 hover:text-white cursor-pointer ">
          <FaHeart size={20} />
        </div>
        <span className="text-sm font-medium">Favorite</span>
      </nav>
    </div>
  );
};

export default Sidebar;
