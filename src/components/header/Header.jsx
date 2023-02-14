import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ logget, onSubmit }) => {
  const navigate = useNavigate();

  const logout = () => {
    onSubmit();
    navigate("/");
  };
  return (
    <div>
      {logget && (
        <>
          {/* <Link to="/login">Login</Link> */}
          <Link to="/home"> Todos</Link>
          <h3 onClick={logout}>
            <Link to="/logout">Logout</Link>
          </h3>
        </>
      )}
    </div>
  );
};

export default Header;