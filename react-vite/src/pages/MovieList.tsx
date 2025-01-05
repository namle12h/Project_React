import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MovieCard from "./MovieCards";
import { Link } from "react-router";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

export default function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    // Fetch dữ liệu từ TMDB API
    fetch("https://api.themoviedb.org/3/movie/popular", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmY0YWJjNGUzMTEyYzNhOGIyODMwMWMxYWQwMzllZSIsInN1YiI6IjY0MTI3N2Q2ZTE4ZTNmMDdkMDU1ZjY4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iw5OvKuR35yRllO8eoRWjvCQnlFmh8nieiLD9NpSDc8",
      },
    })
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className=" bg-gray-900 max-w-[1250px] relative">
      <h2 className="text-2xl font-bold mb-6 text-white bg-gray-800 p-2 border border-gray-300">
        Popular Movies
      </h2>
      <Swiper
        spaceBetween={30} // Khoảng cách giữa các slide
        slidesPerView={4} // Hiển thị 4 slide cùng lúc
        navigation={true} // Bật nút Previous/Next
        autoplay={{ delay: 3000 }} // Tự động chuyển slide sau 3 giây
        modules={[Navigation, Pagination, Autoplay]} // Import các module
        className="mySwiper"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Link to={`/movies/${movie.id}`} key={movie.id}>
              <MovieCard
                title={movie.title}
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                genre="Action/Adventure"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
