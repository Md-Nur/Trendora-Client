import { NavLink } from "react-router-dom";

const NavItems = () => {
  return (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/products">All Products</NavLink>
      </li>
      <li>
        <NavLink to="/signup">Register</NavLink>
      </li>
    </>
  );
};

export default NavItems;
