
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Books from "./pages/Books";

import Login from "./pages/Login";
import Card from "./pages/Card";

export default function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/books" element={<Books />} />

      

        <Route path="/login" element={<Login />} />

        <Route path="/card" element={<Card />} />
      </Routes>
</div>
  );
}

