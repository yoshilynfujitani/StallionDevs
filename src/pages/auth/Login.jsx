import { useState } from "react";
import { CiLogin } from "react-icons/ci";
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
      <div className="flex flex-col space-y-2">
        <div className="flex space-x-2 text-slate-50 font-ubuntu my-5">
          {" "}
          <div className="flex flex-col">
            <label htmlFor="" className="text-slate-50">
              Email
            </label>
            <input
              type="text"
              onChange={(e) => setemail(e.target.value)}
              className="rounded-md px-4 py-2 bg-[#2f2f2f]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="text-slate-50">
              Password
            </label>
            <input
              type="text"
              onChange={(e) => setpassword(e.target.value)}
              className="rounded-md px-4 py-2 bg-[#2f2f2f]"
            />
          </div>
        </div>

        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className="bg-white w-1/4 rounded-full py-2  flex items-center justify-center  "
        >
          <CiLogin /> Log In
        </button>
      </div>
    </div>
  );
};

export default Login;
