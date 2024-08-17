import { FormEvent, useState } from "react";
import SignInPage, { User } from "../components/SignInPage";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import app from "../firebase/config";

const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
    displayName: "",
    photoURL: "",
  });
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential: any) => {
        const user = userCredential.user;
        console.log(user);
        toast.success("User created successfully");
        navigate("/");
        setUser({ email: "", password: "" });
      })
      .then(() => {
        // const auth = getAuth(app);
        if (auth.currentUser) {
          updateProfile(auth.currentUser, {
            displayName: user.displayName,
            photoURL: user.photoURL,
          });
        }
      })
      .catch((error: any) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
        toast.error(errorMessage);
      });
  };

  return (
    <SignInPage
      user={user}
      setUser={setUser}
      title="Sign Up"
      handleSubmit={handleSubmit}
    />
  );
};

export default SignUp;
