import React from "react";
import { useNavigate } from "react-router-dom";

const Back = ({ destination }) => {
  const navigate = useNavigate();
  return <button onClick={() => navigate(destination)}>Back</button>;
};

export default Back;
