import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import PopularMovie from "./pages/PopularMovie";
import MovieDetail from "./pages/DetailMovie";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route index element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="/popular" element={<PopularMovie />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
