import React, { useEffect } from "react";
import { useHistory, NavLink } from "react-router-dom";

function Header(props) {
  const history = useHistory();

  const logOut = () => {
    localStorage.removeItem("login");
    history.push("/");
    props.setLogin(false);
  };

  const logIn = () => {
    history.push("/login");
  };

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("login"));
    if (data === null) return props.setLogin(false);
  }, []);

  return (
    <>
      <nav className="py-2 bg-light border-bottom px-2">
        <div className="container-fluid d-flex flex-wrap">
          <ul className="nav me-auto">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link link-dark px-2">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/about" className="nav-link link-dark px-2">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/todos" className="nav-link link-dark px-2">
                Todos
              </NavLink>
            </li>
          </ul>
          <ul className="nav ">
            <li className="nav-item">
              {!props.isLogin ? (
                <button
                  onClick={logIn}
                  className="btn btn-primary px-2 fw-bold"
                >
                  Login
                </button>
              ) : (
                <button
                  onClick={logOut}
                  className="btn btn-danger px-2 fw-bold"
                >
                  Log Out
                </button>
              )}
            </li>
          </ul>
        </div>
      </nav>
      <div className="container-fluid d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom px-4">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none"
        >
          <span className="fs-4">My Third React</span>
        </a>
        <form className="col-12 col-lg-auto mb-3 mb-lg-8">
          <input
            type="search"
            className="form-control"
            placeholder="Search..."
            aria-label="Search"
          />
        </form>
      </div>
    </>
  );
}

export default Header;
