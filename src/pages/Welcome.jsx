import React from "react";
import WelcomeBG from "/WelcomeBG.jpg";
import { Link, Outlet, useLocation } from "react-router-dom";

const Welcome = () => {
  const location = useLocation();
  return (
    <div className="flex h-screen overflow-clip">
      <div className="w-screen flex">
        <img src={WelcomeBG} alt="" className="w-1/2 h-screen absolute -z-10" />

        <div className="z-10 self-end  py-10 px-10 font-ubuntu">
          <h1 className="text-slate-50  text-4xl py-2 ">
            A space for creative{" "}
            <span className="bg-gradient-to-r from-rose-500 via-orange-400 to-sky-600 bg-clip-text text-transparent ">
              developers
            </span>
            .
          </h1>
          <p className="text-slate-300">
            Welcome to a community full of dedicated and inspiring developers.
            Take your first time by creating an account and logging in!
          </p>
        </div>
      </div>
      <div className="bg-[#171717] h-full w-full flex flex-col  justify-center font-ubuntu px-10">
        <div className="text-slate-100">
          <h1 className="text-7xl  ">Your journey starts here</h1>
          {location.pathname === "/" ? (
            <p>
              Already have an account?{" "}
              <Link to="/login">
                <span className="bg-gradient-to-r from-rose-500 via-orange-400 to-sky-600 bg-clip-text text-transparent ">
                  Log In
                </span>
              </Link>
            </p>
          ) : (
            <p>
              Dont have an account?{" "}
              <Link to="/">
                <span className="bg-gradient-to-r from-rose-500 via-orange-400 to-sky-600 bg-clip-text text-transparent ">
                  create an account
                </span>
              </Link>
            </p>
          )}
        </div>
        <div className="bg-[#141414]  rounded-md shadow-md my-10 w-fit p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
