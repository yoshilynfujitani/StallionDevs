import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useUser } from "../auth/useUser";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading, user } = useUser();
  console.log(isAuthenticated);
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
      console.log("You are not an authrorized user!");
      navigate("/login");
    },
    [isAuthenticated, isLoading, navigate, user]
  );

  if (isLoading) return <h1>Loading...</h1>;
  return children;
};

export default ProtectedRoute;
