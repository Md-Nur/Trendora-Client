import { Dispatch } from "react";
import { Link } from "react-router-dom";
import GoogleBtn from "./GoogleBtn";

export interface User {
  email: string;
  password: string;
}

const SignInPage = ({
  user,
  setUser,
  title,
  handleSubmit,
}: {
  user: User;
  setUser: Dispatch<User>;
  title: string;
  handleSubmit: () => void;
}) => {
  return (
    <div className="hero w-full my-10">
      <div className="hero-content flex-col lg:flex-row-reverse w-full">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">{title} Now!</h1>
          <div className="divider"></div>
          <GoogleBtn />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                required
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered"
                required
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
              <label className="label">
                <Link
                  to={title === "Login" ? "/signup" : "login"}
                  className="label-text-alt link link-hover"
                >
                  {title === "Login"
                    ? "Don't have an account? Sign up"
                    : "Already have an account? Login"}
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">{title}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
