import { getAuth } from "firebase/auth";
import app from "../firebase/config";

const LogoutBtn = () => {
  const auth = getAuth(app);
  return (
    <button
      className=""
      onClick={() => {
        auth.signOut();
      }}
    >
      Logout
    </button>
  );
};

export default LogoutBtn;
