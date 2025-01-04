// import React from "react";
// import { StarFilled } from "@ant-design/icons";

// // Props của MovieCard
// interface MovieCardProps {
//   title: string;
//   image: string | null; // Có thể null
//   rating: number;
//   overview?: string;
// }

// const MovieCard: React.FC<MovieCardProps> = ({
//   title,
//   image,
//   rating,
//   overview,
// }) => {
//   return (
//     <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md relative hover:scale-105 transform transition-all duration-300">
//       {/* Poster */}
//       <img
//         src={
//           image
//             ? `https://image.tmdb.org/t/p/w500${image}`
//             : "https://via.placeholder.com/500x750" // Placeholder nếu không có ảnh
//         }
//         alt={title}
//         className="w-full h-64 object-cover"
//       />

//       {/* Movie Details */}
//       <div className="p-4">
//         {/* Title */}
//         <h3 className="text-lg font-semibold truncate">{title}</h3>

//         {/* Rating */}
//         <div className="flex items-center text-yellow-500 mt-2">
//           <StarFilled className="mr-1" />
//           <span>{rating}</span>
//         </div>

//         {/* Overview */}
//         <p className="text-sm text-gray-300 mt-2 line-clamp-3">{overview}</p>
//       </div>
//     </div>
//   );
// };

// export default MovieCard;

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
          {/* Đảm bảo nút không che chữ */}
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
