import axios from "axios";
import { Outlet } from "react-router-dom";

function App() {
  axios.defaults.baseURL = import.meta.env.VITE_API_URL!;
  axios.defaults.withCredentials = true;
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
