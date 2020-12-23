import React, { Component } from "react";
import "./styles.css";

export default class Login extends Component {
  render() {
    return (
      <>
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
            <input type="button" value="Log in"></input>
            <input type="button" value="Sign Up"></input>
          </form>
        </div>
      </>
    );
  }
}
