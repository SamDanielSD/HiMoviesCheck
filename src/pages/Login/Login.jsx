import React, { useState } from "react";
import { login, signup } from "../../firebase";
import "./Login.css";
import logo from "../../assets/logo.png";
import netflix_spinner from "../../assets/netflix_spinner.gif";

const Login = () => {
  const [logedin, setLogedin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [load, setLoad] = useState(false);

  const handleLogin = () => {
    setLogedin(!logedin);
  };

  const user_auth = async (event) => {
    event.preventDefault();
    setLoad(true);

    if (logedin) {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
    setLoad(false);
  };

  return load ? (
    <div className="loading-spinner">
      <img src={netflix_spinner} alt="" />
    </div>
  ) : (
    <div className="login">
      {/* {load ? <div></div>: } */}
      <div className="login-form">
        <h1>{logedin ? "Sign In" : "Sign Up"}</h1>
        <form action="">
          {logedin ? null : (
            <input
              value={name}
              className="transition"
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              placeholder="Your Name"
            />
          )}

          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <button onClick={user_auth} type="submit" className="transition">
            {logedin ? "Sign In" : "Sign Up"}
          </button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {logedin ? (
            <p>
              New to HiMovies? <span onClick={handleLogin}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already have account?{" "}
              <span onClick={handleLogin}>Sign In Now </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
