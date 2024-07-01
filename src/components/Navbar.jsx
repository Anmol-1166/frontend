import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useUserContext from "./userContext";

const Navbar = () => {
  
  const [currentUser, setcurrentUser] = useState(
    JSON.parse(sessionStorage.getItem('user'))
  );

  const {loggedIn , logout} = useUserContext();

  const showLoginOptions = () => {
    if(currentUser !== null || loggedIn){
      return <li className="nav-item">
      <button className="btn btn-danger" onClick={logout} >
        Log Out
      </button>
    </li>
    }else{
      return <>
        <li className="nav-item">
              <NavLink className="nav-link" to="/signup" >
                Signup
              </NavLink>
            </li><li className="nav-item">
              <NavLink className="nav-link" to="/login" >
                Login
              </NavLink>
            </li>
      </>
    }
  }


  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {/* <NavLink className="navbar-brand" to="/home">
          Home
        </NavLink>
        <NavLink className="navbar-brand" to="/signup">
          Sign-Up
        </NavLink>
        <NavLink className="navbar-brand" to="/login">
          Log-In
        </NavLink> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/home" >
                Home
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/signup">
                Sign-Up
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/event">
                Event
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/state">
                State
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/todo">
                Todo-List
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/pl">
                Product List
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blog">
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/manage">
                Manage user
              </NavLink>
            </li>
            {showLoginOptions()}
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
