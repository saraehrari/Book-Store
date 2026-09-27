

import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import ProtectedRoute from "./Pages/ProtectedRoute";

import Home from "./Pages/Home";
import Books from "./Pages/Books";
import BookDetails from "./Pages/BookDeatils";
import Login from "./Pages/Login";
import Card from "./Pages/Card";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  function login() {
    setIsAuth(true);
  }

  function logout() {
    setIsAuth(false);
  }

  return (
    <div>
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Protected Books */}
        <Route
          path="/books"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <Books />
            </ProtectedRoute>
          }
        />

        {/* Protected Book Details */}
        <Route
          path="/bookdetails/:id"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <BookDetails />
            </ProtectedRoute>
          }
        />

        {/* Login */}
        <Route
          path="/login"
          element={
            <Login
              isAuth={isAuth}
              login={login}
              logout={logout}
            />
          }
        />

        {/* Cart */}
        <Route path="/card" element={<Card />} />
      </Routes>
    </div>
  );
}

export default App;

