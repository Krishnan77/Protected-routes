import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./Auth";

function Home() {
  const auth = useAuth();
  return (
    <div>
      Home page
      <p>
        <Link to="/about">About</Link>
      </p>
      <p>
        {" "}
        <Link to="/product">product</Link>
      </p>
      <p>
        {" "}
        <Link to="/profile">Profile</Link>
      </p>
      {!auth.user && (
        <p>
          {" "}
          <Link to="/login">Login</Link>
        </p>
      )}
    </div>
  );
}
export default Home;
