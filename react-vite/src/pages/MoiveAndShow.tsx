import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import MovieCard from "./MovieCards";
import { Link } from "react-router";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  genre: string;
}

const MoviesAndShowsSection: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/now_playing", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmY0YWJjNGUzMTEyYzNhOGIyODMwMWMxYWQwMzllZSIsInN1YiI6IjY0MTI3N2Q2ZTE4ZTNmMDdkMDU1ZjY4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iw5OvKuR35yRllO8eoRWjvCQnlFmh8nieiLD9NpSDc8",
      },
    })
      .then((res) => res.json())
      .then((data) =>
        setMovies(
          data.results.map((movie: any) => ({
            id: movie.id,
            title: movie.title,
            poster_path: movie.poster_path,
            genre: "Action/Adventure",
          }))
        )
      )
      .catch((err) => console.error(err));
  }, []);

  const handlePageClick = (pageIndex: number) => {
    if (swiperInstance) {
      swiperInstance.slideTo(pageIndex); // Chuyển đến trang cụ thể
    }
  };
  return (
    <div className="p-6 max-w-[1250px]">
      <h2 className="text-2xl font-bold mb-6 text-white bg-gray-800 p-2  border[0,7px] border-gray-300">
        Movies and Shows
      </h2>
      <Swiper
        slidesPerView={4}
        grid={{
          rows: 2,
          fill: "row",
        }}
        spaceBetween={20}
        navigation={true}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        modules={[Grid, Navigation]}
        autoplay={{ delay: 3000 }}
        className="mySwiper"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Link to={`/movies/${movie.id}`} key={movie.id}>
              <MovieCard
                title={movie.title}
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                genre="Action/Adventure" // Thể loại mẫu, bạn có thể sửa theo API
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-4 flex justify-center space-x-2">
        {Array.from({ length: Math.ceil(movies.length / 4) }).map(
          (_, index) => (
            <button
              key={index}
              onClick={() => handlePageClick(index)} // Chuyển trang khi click
              className="px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-700"
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default MoviesAndShowsSection;
// import { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Grid, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import Header from "./Header";
// import Footer from "./Footer";
// import CircularProgress from "./CircleProp";
// import { Link } from "react-router-dom";

// interface Movie {
//   id: number;
//   title: string;
//   poster_path: string;
//   vote_average: number;
//   release_date: string;
// }

// export default function PopularMovieAndShow() {
//   const [movies, setMovies] = useState<Movie[]>([]);

//   // Fetch dữ liệu phim từ TMDB API
//   useEffect(() => {
//     fetch("https://api.themoviedb.org/3/movie/popular", {
//       method: "GET",
//       headers: {
//         accept: "application/json",
//         Authorization:
//           "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmY0YWJjNGUzMTEyYzNhOGIyODMwMWMxYWQwMzllZSIsInN1YiI6IjY0MTI3N2Q2ZTE4ZTNmMDdkMDU1ZjY4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iw5OvKuR35yRllO8eoRWjvCQnlFmh8nieiLD9NpSDc8",
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data && data.results) {
//           setMovies(data.results);
//         }
//       })
//       .catch((error) => console.error("Error fetching movies:", error));
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Header />
//       <div className="container mx-auto py-8">
//         <h2 className="text-xl font-bold mb-6">Popular Movies</h2>
//         <Swiper
//           slidesPerView={4}
//           grid={{
//             rows: 2, // 2 hàng phim
//             fill: "row",
//           }}
//           spaceBetween={20}
//           navigation={true}
//           pagination={{
//             clickable: true,
//           }}
//           autoplay={{ delay: 3000 }} // Tự động chuyển slide
//           modules={[Grid, Navigation, Pagination, Autoplay]}
//           className="mySwiper"
//         >
//           {movies.map((movie) => (
//             <SwiperSlide key={movie.id}>
//               <Link to={`/movies/${movie.id}`}>
//                 <div className="relative">
//                   <img
//                     src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                     alt={movie.title}
//                     className="rounded-lg object-cover w-full h-full"
//                   />
//                   <div className="absolute bottom-2 left-2">
//                     <CircularProgress
//                       percentage={Math.round(movie.vote_average * 10)}
//                     />
//                   </div>
//                   <h3 className="mt-2 text-center text-gray-800 font-medium">
//                     {movie.title}
//                   </h3>
//                 </div>
//               </Link>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//       <Footer />
//     </div>
//   );
// }
