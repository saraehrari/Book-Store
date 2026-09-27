
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/"
       className={({ isActive }) => isActive ? "active" : ""}
      >Home</NavLink>

      <NavLink to="/books"
       className={({ isActive }) => isActive ? "active" : ""}
      >Books</NavLink>

      <NavLink to="/bookdetails"
       className={({ isActive }) => isActive ? "active" : ""}
      >Book Details</NavLink>

      <NavLink to="/login"
       className={({ isActive }) => isActive ? "active" : ""}
      >Login</NavLink>

      <NavLink to="/card"
       className={({ isActive }) => isActive ? "active" : ""}
      >Cart</NavLink>
    </nav>
  );
}

