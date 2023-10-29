import { useState } from "react";
import { useSignUp } from "./useSignUp";

const SignUp = () => {
  const { signUp, isLoading } = useSignUp();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [username, setusername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    signUp({ email: email, password: password, name: username });
  }
  return (
    <div>
      <input type="text" onChange={(e) => setemail(e.target.value)} />
      <input type="text" onChange={(e) => setpassword(e.target.value)} />
      <input type="text" onChange={(e) => setusername(e.target.value)} />
      <button onClick={handleSubmit} disabled={isLoading}>
        SignUp
      </button>
    </div>
  );
};

export default SignUp;
