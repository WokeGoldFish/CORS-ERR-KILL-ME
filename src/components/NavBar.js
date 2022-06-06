import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function NavBar({ user, setUser }) {
  const logout = () => {
    setUser({});
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/ProductPg">
        Spend Money
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="/navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <form>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/home">
                News <span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/todo">
                ToDo
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/NewContact">
                New Contact <span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/Cart">
                Cart<span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/ProductPg">
                Products<span className="sr-only"></span>
              </Link>
            </li>
            {user ? (
              <>
                <li className="nav-item active">
                  <Link
                    className="nav-link"
                    to="/Login"
                    onClick={() => {
                      logout();
                    }}
                  >
                    Login<span className="sr-only"></span>
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="/SignUp">
                    SignUp<span className="sr-only"></span>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item active">
                  <p className="nav-link" to="/Login">
                    {user.username}
                    <span className="sr-only"></span>
                  </p>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="/Cart">
                    Cart<span className="sr-only"></span>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </form>
      </div>
    </nav>
  );
}
