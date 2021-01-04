import React, { useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import "./styles.css";

export default function Login(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  return (
    <>
      <Header />
      <div className="main">
        <div className="image">
          <h2 style={{ fontSize: "xx-large" }}>Freak Out</h2>
          <p style={{ fontSize: "x-large" }}>
            Freak Out helps you to store and share your memories
          </p>
        </div>
        <div className="login">
          <form className="form" action="">
            <input
              type="email"
              placeholder="Enter your Email"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            ></input>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassWord(e.target.value)}
              required
            ></input>
            {props.error ? <p className="errorInfo">{props.error}</p> : null}
            <button onClick={() => props.loginHandler(userName, password)}>
              Log In
            </button>
            <button onClick={() => props.signupHandler(userName, password)}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
