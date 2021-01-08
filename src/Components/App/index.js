import "./styles.css";

import { useEffect, useState } from "react";
import Login from "../Login";
import AfterLogin from "../AfterLogin";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(undefined);
  const [userName, setUserName] = useState(undefined);

  const getUserName = () => {
    return fetch(`http://localhost:9999/userInfo`, { credentials: "include" })
      .then((r) => {
        if (r.ok) {
          return r.json();
        } else {
          setLoggedIn(false);
          setUserName(undefined);
          return { success: false };
        }
      })
      .then((r) => {
        if (r.success !== false) {
          setLoggedIn(true);
          setUserName(r.email);
        }
      });
  };

  useEffect(() => {
    getUserName();
  }, []);

  const signupHandler = (user) => {
    fetch("http://localhost:9999/signup", {
      method: "POST",
      body: JSON.stringify({
        userName: user.userName,
        email: user.email,
        dob: user.dob,
        password: user.password,
        sex: user.sex,
        country: user.country,
        phNum: user.phNum,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
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
          return logoutHandler();
        } else {
          setError(r.err);
        }
      });
  };

  const loginHandler = (userName, password) => {
    login("http://localhost:9999/login", userName, password);
  };

  const logoutHandler = () => {
    return fetch(`http://localhost:9999/logout`, {
      credentials: "include",
    }).then((r) => {
      if (r.ok) {
        setLoggedIn(false);
        setUserName(undefined);
      }
    });
  };

  const login = (url, userName, password) => {
    fetch(url, {
      method: "POST",
      body: JSON.stringify({ email: userName, password }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
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
          return getUserName();
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
        <AfterLogin username={userName} logoutHandler={logoutHandler} />
      )}
    </>
  );
}

export default App;
