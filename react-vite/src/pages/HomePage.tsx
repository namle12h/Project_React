// import MovieList from "./MovieList";
import Banner from "./Banner";
import Header from "./Header";
import MoviesAndShowsSection from "./MoiveAndShow";
import MovieList from "./MovieList";
import Sidebar from "./Siderbar";
// import Footer from "./Footer";
// import Banner from "./Banner";
export default function HomePage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gray-900 text-white">
        <Header />
        {/* <MainContent /> */}

        <Banner />
        <MovieList />
        {/* <MoviesAndShowsSection /> */}
      </div>
    </div>
  );
}
