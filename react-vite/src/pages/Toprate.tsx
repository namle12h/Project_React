import { useState, useEffect } from "react";
import { Card } from "antd";
import { FaFire } from "react-icons/fa";
import Header from "./Header";
import CircularProgress from "./CircleProp";
import Footer from "./Footer";
import Sidebar from "./Siderbar";
import { Link } from "react-router";

const { Meta } = Card;

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
}

export default function TopRatedMovie() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/top_rated", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmY0YWJjNGUzMTEyYzNhOGIyODMwMWMxYWQwMzllZSIsInN1YiI6IjY0MTI3N2Q2ZTE4ZTNmMDdkMDU1ZjY4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iw5OvKuR35yRllO8eoRWjvCQnlFmh8nieiLD9NpSDc8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.results) {
          // Sắp xếp phim theo điểm đánh giá giảm dần
          const sortedMovies = data.results.sort(
            (a: Movie, b: Movie) => b.vote_average - a.vote_average
          );
          setMovies(sortedMovies);
        }
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Sidebar />
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-6">Top Rated Movies</h2>

        <div
          className="grid grid-cols-4 gap-6"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
          }}
        >
          {movies.map((movie, index) => (
            <Card
              key={movie.id}
              hoverable
              cover={
                <div style={{ position: "relative" }}>
                  <Link to={`/movies/${movie.id}`} key={movie.id}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      className="h-full object-cover"
                    />
                    {index < 3 && (
                      <span
                        style={{
                          position: "absolute",
                          top: "10px",
                          left: "10px",
                          backgroundColor: "rgba(255, 69, 0, 0.8)",
                          color: "white",
                          fontWeight: "bold",
                          padding: "5px 10px",
                          borderRadius: "5px",
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <FaFire style={{ fontSize: "16px" }} />{" "}
                        {/* Icon Fire */}
                        Top {index + 1}
                      </span>
                    )}
                  </Link>
                </div>
              }
              className="rounded-lg shadow-md"
            >
              <div className="absolute bottom-[80px] left-4">
                <CircularProgress
                  percentage={Math.round(movie.vote_average * 10)}
                />
              </div>
              <Meta
                title={movie.title}
                description={`Rating: ${
                  movie.vote_average
                } | Release Date: ${new Date(
                  movie.release_date
                ).toDateString()}`}
              />
            </Card>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
