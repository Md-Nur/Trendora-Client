import { useState } from "react";
import SignInPage, { User } from "../components/SignInPage";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
    const navigate = useNavigate();
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
  });
  const handleSubmit = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential: any) => {
        const user = userCredential.user;
        console.log(user);
        toast.success("User created successfully");
        navigate("/");
        setUser({ email: "", password: "" });
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
