import { FormEvent, useState } from "react";
import SignInPage, { User } from "../components/SignInPage";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/config";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.loading("Logging in...");
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then(() => {
        toast.dismiss();
        toast.success("Login successful");
        navigate("/");
      })
      .catch((error: any) => {
        toast.error(error.message);
      });
  };
  return (
    <SignInPage
      user={user}
      setUser={setUser}
      title="Login"
      handleSubmit={handleSubmit}
    />
  );
};

export default Login;
