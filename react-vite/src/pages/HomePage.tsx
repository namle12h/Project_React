import Header from "./Header";
import Sidebar from "./Siderbar";
import Banner from "./Banner";
import MoviesAndShowsSection from "./MoiveAndShow";
import MovieList from "./MovieList";
import Footer from "./Footer";
// import Footer from "./Footer";

const HomePage = () => {
  return (
    <div className=" bg-gray-900 min-h-screen">
      {/* Header */}
      {/* <div className="sticky top-0 z-50 bg-gray-900 text-white"> */}
      <Header />
      {/* </div> */}

      {/* Main Layout */}
      <div className="grid grid-cols-12 gap-4 container mx-auto px-6 py-6">
        {/* Sidebar Left */}
        {/* <aside className="col-span-12 bg-gray-800 text-white rounded-lg p-4"> */}
        <Sidebar />
        {/* </aside> */}

        {/* Main 1 */}
        <section className=" col-span-12 bg-gray-900 rounded-lg p-6 shadow-md">
          <Banner />
          <div className="p-6 relative">
            <MovieList />
          </div>
        </section>

        {/* Main 2 */}
        <section className="col-span-12  bg-gray-900 rounded-lg p-6 shadow-md">
          <MoviesAndShowsSection />
        </section>
      </div>

      {/* Footer */}
      {/* <footer className="bg-gray-800 text-white py-4 text-center">
        <p>© 2025 Your Company. All Rights Reserved.</p>
      </footer> */}
      <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mb-8">
        Next Page
      </button>

      <Footer />
    </div>
  );
};

export default HomePage;
