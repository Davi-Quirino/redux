import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };

  return (
    <nav>
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? { color: activeStyle.color } : {})}
      >
        Home
      </NavLink>{" "}
      {" | "}
      <NavLink
        to="/courses"
        style={({ isActive }) => (isActive ? { color: activeStyle.color } : {})}
      >
        Courses
      </NavLink>{" "}
      {" | "}
      <NavLink
        to="/about"
        style={({ isActive }) => (isActive ? { color: activeStyle.color } : {})}
      >
        About
      </NavLink>
    </nav>
  );
};

export default Header;
