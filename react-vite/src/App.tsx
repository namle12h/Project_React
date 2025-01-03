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
import Sidebar from "./pages/Siderbar";
import Banner from "./pages/Banner";
import MoviesAndShowsSection from "./pages/MoiveAndShow";
import MovieList from "./pages/MovieList";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <div className="grid grid-cols-12 ">
      {/* Sidebar Left */}
      <div className="col-span-2 bg-gray-900 text-white">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="col-span-8 bg-gray-900 text-white flex flex-col overflow-y-auto">
        {/* Header */}
        <Header />

        {/* Banner */}
        <div className="p-6">
          <Banner />
        </div>

        {/* Movies and Shows */}
        <div className="p-6">
          <MovieList />
          <MoviesAndShowsSection />
        </div>

        {/* Footer */}
        <Footer />
      </div>

      {/* Sidebar Right */}
      <div className="col-span-2 bg-gray-900 text-white">
        {/* Placeholder hoặc nội dung sidebar phải */}
        {/* <p className="p-4">Right Sidebar</p> */}
      </div>
    </div>
  );
};

export default App;
