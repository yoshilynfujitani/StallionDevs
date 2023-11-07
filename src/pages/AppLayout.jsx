import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const AppLayout = () => {
  return (
    <>
      <Toaster position="bottom-left" />
      <Navbar />
      <Outlet />
    </>
  );
};

export default AppLayout;
