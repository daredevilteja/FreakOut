import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Header from "../Header";
import Home from "../Home";
import MyPosts from "../MyPosts";
import Profile from "../Profile";
import "./styles.css";

export default function AfterLogin(props) {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="container-main">
          <aside>
            <nav className="navigation">
              <ul style={{ listStyle: "none" }}>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/myposts">My Posts</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
              </ul>
              <div>
                <button onClick={props.logoutHandler}>Logout</button>
              </div>
            </nav>
          </aside>

          <Switch>
            <Route path="/" exact>
              <Home
                username={props.username}
                logoutHandler={props.logoutHandler}
              />
            </Route>
            <Route path="/myposts">
              <MyPosts
                username={props.username}
                logoutHandler={props.logoutHandler}
              />
            </Route>
            <Route path="/profile">
              <Profile
                username={props.username}
                logoutHandler={props.logoutHandler}
              />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}
