import React from "react";
import { useHistory } from "react-router";

function Login(props) {
  let history = useHistory();

  const doLogin = () => {
    localStorage.setItem("login", "true");
    history.push("/");
    props.onLoginChange(true);
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center "
      style={{ height: "600px" }}
    >
      <div className="row">
        <div className="col">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button onClick={doLogin} class="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
