import React from "react";
import { useNavigate } from "react-router-dom";

function ButtonForLogin() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginTop: "20px" }}>
      <button onClick={handleLoginClick} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Login
      </button>
      <button onClick={handleSignUpClick} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Sign Up
      </button>
    </div>
  );
}

export default ButtonForLogin;
