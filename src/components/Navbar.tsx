import { ReactNode, useState } from "react";
import { MdMenu } from "react-icons/md";
import NavItems from "./NavItems";
import app from "../firebase/config";
import LogoutBtn from "./LogoutBtn";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

const Navbar = ({ children }: { children: ReactNode }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState<User | null>(null);
  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-base-300 w-full">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <MdMenu className="inline-block h-6 w-6 stroke-current" />
            </label>
          </div>
          <div className="mx-2 flex-1 px-2">Trendora</div>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <NavItems user={user} />
            </ul>
          </div>
          {user && (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt={user?.displayName || "User Photo"}
                    src={user?.photoURL || ""}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>{user?.displayName}</li>
                <li>{user?.email}</li>
                <li>
                  <LogoutBtn />
                </li>
              </ul>
            </div>
          )}
        </div>
        {/* Page content here */}
        {children}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <NavItems user={user} />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
