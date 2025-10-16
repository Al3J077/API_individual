import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import Original from "./pages/Original";
import Info from "./pages/Info";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "1rem", padding: "1rem", background: "#eee" }}>
        <Link to="/">Inicio</Link>
        <Link to="/search">Buscar</Link>
        <Link to="/original">Original</Link>
        <Link to="/info">Info</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/original" element={<Original />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </BrowserRouter>
  );
}