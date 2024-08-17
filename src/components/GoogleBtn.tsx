import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase/config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const GoogleBtn = () => {
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const auth = getAuth(app);

  return (
    <button
      className="btn btn-accent"
      onClick={() => {
        signInWithPopup(auth, provider)
          .then((result) => {
          
            const user: any = result.user;
            if (user) {
              toast.success(`Welcome ${user.displayName}`);
              navigate("/");
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }}
    >
      Sign in with Google
    </button>
  );
};

export default GoogleBtn;
