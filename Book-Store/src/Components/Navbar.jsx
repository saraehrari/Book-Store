
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className= "main-navbar">
      <NavLink to="/"
       className={({ isActive }) => isActive ? "active" : ""}
      >Home</NavLink>

      <NavLink to="/books"
       className={({ isActive }) => isActive ? "active" : ""}
      >Books</NavLink>

      <NavLink to="/login"
       className={({ isActive }) => isActive ? "active" : ""}
      >Login</NavLink>
    </nav>
  );
}

