import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import MovieCard from "./MovieCards";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  genre: string;
}

const MoviesAndShowsSection: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular", {
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

  return (
    <div className="p-6 w-[1250px]">
      <h2 className="text-2xl font-bold mb-6 text-white">Movies and Shows</h2>
      <Swiper
        slidesPerView={4}
        grid={{
          rows: 2,
          fill: "row",
        }}
        spaceBetween={20}
        navigation={true}
        modules={[Grid, Navigation]}
        autoplay={{ delay: 3000 }}
        className="mySwiper"
      >
        {/* {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="bg-gray-700 text-white p-4 rounded-lg shadow-md hover:scale-105 transform transition duration-300">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold truncate">{movie.title}</h3>
              <p className="text-sm text-gray-300">{movie.genre}</p>
            </div>
          </SwiperSlide>
        ))} */}
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard
              title={movie.title}
              image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              genre="Action/Adventure" // Thể loại mẫu, bạn có thể sửa theo API
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MoviesAndShowsSection;
