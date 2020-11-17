import React from "react";
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="headernav">
      <header>
        <div className="container">
          <img src={logo} className="logo" alt="Turquoise butterfly." />
          <div className="text-box">
            <h1>Co-Make</h1>
          </div>
        </div>

        <nav id="hnavbuttons">
          <NavLink className="main-nav" activeClassName="active" to="/signup">
            SignUp
          </NavLink>
          <NavLink className="main-nav" activeClassName="active" to="/signin">
            SignIn
          </NavLink>
          <NavLink className="main-nav" activeClassName="active" to="/allposts">
            Posts
          </NavLink>
          <NavLink className="main-nav" activeClassName="active" to="/create">
            Create
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
