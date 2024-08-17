import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./error-page";
import Home from "./pages/Home";
import Products from "./pages/Products";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
