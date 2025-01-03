import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

export default function DynamicSwiperExample() {
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
    <div className="p-6 bg-gray-900 w-[1250px] ">
      <h2 className="text-2xl font-bold mb-6 text-white">
        Popular Movies Slider
      </h2>
      <Swiper
        spaceBetween={30} // Khoảng cách giữa các slide
        slidesPerView={4} // Hiển thị 3 slide cùng lúc
        navigation={true} // Bật nút Previous/Next
        pagination={{ clickable: true }} // Hiển thị và cho phép bấm vào pagination
        autoplay={{ delay: 3000 }} // Tự động chuyển slide sau 3 giây
        modules={[Navigation, Pagination, Autoplay]} // Import các module
        className="mySwiper"
      >
        {/* Render Slide từ API */}
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className=" bg-gray-800 text-white p-4 rounded-lg">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-72 object-cover rounded-md mb-2"
              />
              <h3 className="text-lg font-semibold">{movie.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
