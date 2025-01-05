import React from "react";
import { FaHome, FaFire, FaCompass, FaFilm } from "react-icons/fa";
import { Link } from "react-router";

const Sidebar: React.FC = () => {
  return (
    <div className="fixed top-[250px] left-0  h-auto text-gray-500 flex flex-col items-start p-4">
      <nav className="space-y-6">
        {/* Home */}
        <button className="flex items-center space-x-4 hover:text-white cursor-pointer">
          <Link to="/home">
            <FaHome size={20} />
          </Link>
        </button>
        <span className="text-sm font-medium">Home</span>

        {/* Trending */}
        <button className="flex items-center space-x-4 hover:text-white cursor-pointer">
          <Link to="/toprate">
            <FaFire size={20} />
          </Link>
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
