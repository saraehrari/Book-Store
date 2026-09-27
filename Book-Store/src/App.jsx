import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";

import Home from "./Pages/Home";
import Books from "./Data/Books";
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
        <Route path="/" element={<Home />} />

        <Route
          path="/books"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <Books />
            </ProtectedRoute>
          }
        />

        <Route
          path="/bookdetails/:id"
          element={<BookDetails />}
        />

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

    
      </Routes>
    </>
  );
}

export default App;