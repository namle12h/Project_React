interface MovieCardProps {
  title: string;
  image: string;
  genre: string; // Thể loại
}
import React from "react";
import { CiPlay1 } from "react-icons/ci";

const MovieCard: React.FC<MovieCardProps> = ({ title, image, genre }) => {
  return (
    <div className="movie-card relative w-[270px]">
      {/* Hình ảnh Poster */}
      <img
        className="movie-image w-[300px] h-full object-cover"
        src={image}
        alt={title}
      />

      {/* Chi tiết Phim */}
      <div className="movie-details absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 text-white">
        <div className="flex flex-col pr-16">
          {" "}
          <h3 className="movie-title text-xl font-semibold leading-tight line-clamp-2 break-words">
            {title}
          </h3>
          <p className="movie-genre text-sm text-gray-300 mt-1">{genre}</p>
        </div>
        <div className="absolute bottom-4 right-4">
          <button className="flex items-center justify-center w-10 h-10 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition duration-300">
            <CiPlay1 className="text-lg " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
