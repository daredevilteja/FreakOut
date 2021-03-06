import React, { useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import SignUp from "../SignUp";
import "./styles.css";

export default function Login(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const [signUp, setSignUp] = useState(false);
  return (
    <>
      {!signUp ? (
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
              <form
                className="form"
                action=""
                onSubmit={(e) => e.preventDefault()}
              >
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
                {props.error ? (
                  <p className="errorInfo">{props.error}</p>
                ) : null}
                <button onClick={() => props.loginHandler(userName, password)}>
                  Log In
                </button>
                <button onClick={() => setSignUp(true)}>Sign Up</button>
              </form>
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <>
          <SignUp
            error={props.error}
            setSignUp={setSignUp}
            signupHandler={props.signupHandler}
          />
        </>
      )}
    </>
  );
}
