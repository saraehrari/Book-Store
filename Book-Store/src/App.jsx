 import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import BookDetails from "./Pages/BookDetials";
import Login from "./Pages/Login";
import ProtectedRoute from "./Pages/ProtectedRoute";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  function login() {
    setIsAuth(true);
  }

  function logout() {
    setIsAuth(false);
  }

  return (
    <>
      <Navbar isAuth={isAuth} onLogout={logout} />

      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Books - Protected */}
        <Route
          path="/books"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <Books />
            </ProtectedRoute>
          }
        />

        {/* Book Details */}
        <Route
          path="/bookdetails/:id"
          element={<BookDetails />}
        />

        {/* Login */}
        <Route
          path="/login"
          element={
            isAuth ? (
              <Navigate to="/books" replace />
            ) : (
              <Login login={login} logout={logout} />
            )
          }
        />

        {/* 404 */}
        <Route
          path="*"
          element={<h1>404 - Page Not Found</h1>}
        />

      </Routes>
    </>
  );
}

export default App;