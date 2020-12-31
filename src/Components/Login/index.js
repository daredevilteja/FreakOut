import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import "./styles.css";

export default function Login(props) {
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
          <form className="form">
            <input type="email" placeholder="Enter your Email"></input>
            <input type="password" placeholder="Password"></input>
            {props.error ? <p className="errorInfo">{props.error}</p> : null}
            <input
              type="button"
              value="Log in"
              onClick={props.loginHandler}
            ></input>
            <input
              type="button"
              value="Sign Up"
              onClick={props.signupHandler}
            ></input>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
