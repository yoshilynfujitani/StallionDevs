import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Dashboard from "./auth/Dashboard";

const AppLayout = () => {
  return (
    <>
      <Toaster position="bottom-left" />
      <Navbar />
      <div className="flex bg-[#2c2c2c] min-h-screen">
        <div className="w-1/4 flex justify-center ">
          <div className="fixed ">
            <Dashboard />
          </div>
        </div>
        <div className="w-3/4">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AppLayout;
