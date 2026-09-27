  import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Books from './Pages/Books';
import BookDetails from "./Pages/BookDetials";
import Login from "./Pages/Login";
import ProtectedRoute from "./Pages/ProtectedRoute";
import Card from "./Pages/Card";
import PagenotFound from "./Pages/PagenotFound"

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
            isAuth ? (
              <ProtectedRoute isAuth={isAuth}>
                <Books />
              </ProtectedRoute>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route path="/bookdetails/:id" element={<BookDetails />} />
    

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
 

 <Route>
    <Route to="/card" element={<Card />} />
 </Route>
        <Route to="*" element={<PagenotFound />} />
      </Routes>
      
           
    </>
  );
}

export default App;