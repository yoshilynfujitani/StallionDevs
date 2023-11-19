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
    <div className="flex flex-col space-y-2">
      <div className="flex space-x-2 text-black font-ubuntu ">
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
      <div className="w-full flex flex-col my-5">
        <label htmlFor="" className="text-slate-50">
          Username
        </label>
        <input
          type="text"
          onChange={(e) => setusername(e.target.value)}
          className="rounded-md px-4 py-2 w-1/2 bg-[#2f2f2f]"
        />
      </div>
      <button
        onClick={handleSubmit}
        disabled={isLoading}
        className="bg-white w-1/4 rounded-full py-2 "
      >
        SignUp
      </button>
    </div>
  );
};

export default SignUp;
