import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Siderbar";
import { CiPlay1 } from "react-icons/ci";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; // Import icons

interface MovieDetail {
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  genres: { id: number; name: string }[];
  release_date: string;
  vote_average: number;
  runtime: number;
}

interface Cast {
  id: number;
  name: string;
  profile_path: string;
}

// Function to render stars
function renderStars(rating: number) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    } else if (i === fullStars && hasHalfStar) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-yellow-500" />);
    }
  }
  return stars;
}

export default function MovieDetail() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieDetail | null>(null);
  const [cast, setCast] = useState<Cast[]>([]);

  useEffect(() => {
    // Fetch Movie Details
    fetch(`https://api.themoviedb.org/3/movie/${id}`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmY0YWJjNGUzMTEyYzNhOGIyODMwMWMxYWQwMzllZSIsInN1YiI6IjY0MTI3N2Q2ZTE4ZTNmMDdkMDU1ZjY4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iw5OvKuR35yRllO8eoRWjvCQnlFmh8nieiLD9NpSDc8",
      },
    })
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error("Error fetching movie details:", error));

    // Fetch Movie Cast
    fetch(`https://api.themoviedb.org/3/movie/${id}/credits`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmY0YWJjNGUzMTEyYzNhOGIyODMwMWMxYWQwMzllZSIsInN1YiI6IjY0MTI3N2Q2ZTE4ZTNmMDdkMDU1ZjY4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iw5OvKuR35yRllO8eoRWjvCQnlFmh8nieiLD9NpSDc8",
      },
    })
      .then((res) => res.json())
      .then((data) => setCast(data.cast.slice(0, 6))) // Get top 6 actors
      .catch((error) => console.error("Error fetching movie cast:", error));
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="bg-gray-900 text-yellow-500 min-h-screen ">
      <Header />
      <Sidebar />
      <div className="container mx-auto px-6 py-6">
        {/* Background Section */}
        <div
          className="relative bg-cover bg-center rounded-lg"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
            height: "500px",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-10 flex items-end justify-start pl-12 pb-12">
            <div className="text-left text-white">
              <h1 className="text-4xl font-bold">{movie.title}</h1>
              <div className="flex items-center gap-3 mt-2">
                {/* Render Stars */}
                <div className="flex">
                  {renderStars(movie.vote_average / 2)}
                </div>

                {/* Genres */}
                {movie.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="bg-gray-700 px-2 py-1 rounded-md text-sm"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
              <button>
                <div className=" relative flex items-center space-x-3 mt-4 ">
                  <div className="absolute w-16 h-16 bg-yellow-400 opacity-30 rounded-full animate-zoom-out"></div>
                  <button className="flex items-center justify-center w-10 h-10 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition duration-300">
                    <CiPlay1 className="text-2xl" />
                  </button>
                  <span className="text-white text-lg">Watch the trailer</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Movie Details */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">{movie.title}</h2>
          <p className="text-gray-300">{movie.overview}</p>
        </div>

        {/* Cast Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4 text-yellow-500">
            Movie Cast
          </h2>
          <div className="flex gap-4">
            {cast.map((actor) => (
              <div key={actor.id} className="text-center">
                <img
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={actor.name}
                  className="rounded-lg shadow-lg"
                />
                <p className="text-sm mt-2">{actor.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Download Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4 text-yellow-500">Download</h2>
          <div className="flex justify-center gap-4">
            <button className="bg-yellow-500 text-black font-bold px-6 py-2 rounded-md">
              480p
            </button>
            <button className="bg-yellow-500 text-black font-bold px-6 py-2 rounded-md">
              720p
            </button>
            <button className="bg-yellow-500 text-black font-bold px-6 py-2 rounded-md">
              1080p
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
