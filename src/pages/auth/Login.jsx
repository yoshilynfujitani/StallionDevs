import { useState } from "react";

import { useLogIn } from "./useLogIn";

const Login = () => {
  const { login, isLoading } = useLogIn();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    login({ email: email, password: password });
  }
  return (
    <div>
      <input type="text" onChange={(e) => setemail(e.target.value)} />
      <input type="text" onChange={(e) => setpassword(e.target.value)} />

      <button onClick={handleSubmit} disabled={isLoading}>
        Log In
      </button>
    </div>
  );
};

export default Login;
