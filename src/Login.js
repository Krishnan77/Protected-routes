import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";

function Login() {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || "/";

  const handleClick = () => {
    auth.login(user);
    navigate(redirectPath, { replace: true });
  };
  return (
    <div>
      <label>
        <input type="text" onChange={(e) => setUser(e.target.value)}></input>
      </label>
      <button onClick={handleClick}> Login</button>
    </div>
  );
}

export default Login;
