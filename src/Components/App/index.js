import "./styles.css";

import { useState } from "react";
import Login from "../Login";
import AfterLogin from "../AfterLogin";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(undefined);

  const signupHandler = (userName, password) => {
    loginOrSignUp("http://localhost:9999/signup", userName, password);
  };

  const loginHandler = (userName, password) => {
    loginOrSignUp("http://localhost:9999/login", userName, password);
  };

  const loginOrSignUp = (url, userName, password) => {
    fetch(url, {
      method: "POST",
      body: JSON.stringify({ email: userName, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => {
        if (r.ok) {
          return { success: true };
        } else {
          return r.json();
        }
      })
      .then((r) => {
        if (r.success === true) {
          setLoggedIn(true);
        } else {
          setError(r.err);
        }
      });
  };

  return (
    <>
      {!loggedIn ? (
        <Login
          signupHandler={signupHandler}
          loginHandler={loginHandler}
          error={error}
        />
      ) : (
        <AfterLogin />
      )}
    </>
  );
}

export default App;
