import { NavLink } from "react-router-dom";
import LogoutBtn from "./LogoutBtn";
import { User } from "firebase/auth";

const NavItems = ({ user }: { user: User | null }) => {
  return (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/products">All Products</NavLink>
      </li>
      {user ? (
        <li>
          <LogoutBtn />
        </li>
      ) : (
        <>
          <li>
            <NavLink to="/signup">Register</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </>
      )}
    </>
  );
};

export default NavItems;
