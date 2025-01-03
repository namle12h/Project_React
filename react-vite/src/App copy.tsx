// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./pages/Header";
// import Banner from "./pages/Banner";
// import Sidebar from "./pages/Siderbar";
// import MoviesAndShowsSection from "./pages/MoiveAndShow";
// import MovieList from "./pages/MovieList";
// import Footer from "./pages/Footer";
// // import MovieDetail from "./pages/MovieDetail";

// const App = () => {
//   return (
//     // <Router>
//     //   <Routes>
//     //     {/* <Route path="/" element={<Home />} /> */}
//     //     {/* <Route path="test" element={<AdvancedSwiperExample />} /> */}
//     //     {/* <Route path="/movies/:id" element={<MovieDetail />} /> */}
//     //   </Routes>
//     // </Router>
//     // <Header/>

//     <div className="flex">
//       <Sidebar />
//       <div className="flex-1 flex flex-col bg-gray-900 text-white">
//         <div>
//           <Header />
//           {/* Phần Banner nằm trên */}
//           <div className="banner-container">
//             <Banner />
//           </div>

//           {/* Phần Swiper nằm dưới */}
//           {/* <div className="swiper-container mt-6"> */}
//           <MovieList />
//           <MoviesAndShowsSection />
//           <Footer />

//           {/* <AdvancedSwiperExample /> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

import Header from "./pages/Header";
import Banner from "./pages/Banner";
import Sidebar from "./pages/Siderbar";
import MoviesAndShowsSection from "./pages/MoiveAndShow";
import MovieList from "./pages/MovieList";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <div
      className="grid h-screen"
      style={{
        gridTemplateColumns: "1fr 3fr ",
      }}
    >
      {/* Sidebar */}
      <div className="bg-gray-900 text-gray-300 h-screen overflow-hidden">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex flex-col bg-gray-900 text-white h-screen overflow-y-auto">
        {/* Header */}
        <Header />

        {/* Banner */}
        <div className="banner-container p-6">
          <Banner />
        </div>

        {/* Movies and Shows */}
        <div className="p-6">
          {/* <h2 className="text-xl font-bold mb-4">Popular Movies</h2> */}
          <MovieList />

          {/* <h2 className="text-xl font-bold mt-8 mb-4">Movies and Shows</h2> */}
          <MoviesAndShowsSection />
        </div>

        {/* Footer */}

        <Footer />
      </div>
    </div>
  );
};

export default App;
