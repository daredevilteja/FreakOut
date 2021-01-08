import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

export default function SignUp(props) {
  const submitHandler = (event) => {
    event.preventDefault();
    const newUser = {
      userName: event.target[0].value,
      email: event.target[1].value,
      dob: event.target[2].value,
      password: event.target[3].value,
      sex: event.target[4].value,
      country: event.target[5].value,
      phNum: event.target[6].value ? Number(event.target[6].value) : null,
    };

    props.signupHandler(newUser);
    props.setSignUp(false);
  };

  return (
    <div className="modal">
      <span
        onClick={() => props.setSignUp(false)}
        className="close"
        title="Close Modal"
      >
        <FontAwesomeIcon icon={faTimesCircle} />
      </span>
      <form
        className="modal-content"
        onSubmit={(event) => submitHandler(event)}
      >
        <div className="container-signUp">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />
          <label htmlFor="name">
            <b>Name</b>
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your Name"
            name="name"
            required
          />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email"
            name="email"
            required
          />

          <label htmlFor="dob">
            <b>Date Of Birth</b>
          </label>
          <input type="date" id="dob" name="dob" />

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            id="psw"
            placeholder="Enter Password"
            name="psw"
            required
          />

          <label htmlFor="sex">
            <b>Sex</b>
          </label>
          <input type="text" id="sex" placeholder="Enter your Sex" name="sex" />

          <label htmlFor="country">
            <b>Country</b>
          </label>
          <input
            type="text"
            id="country"
            placeholder="Enter your Country"
            name="country"
          />

          <label htmlFor="phone">
            <b>Phone</b>
          </label>
          <input
            type="number"
            id="phone"
            placeholder="Enter your Phone Number"
            name="phone"
            maxLength="10"
            size="10"
          />

          <label>
            <input
              type="checkbox"
              checked
              name="remember"
              style={{ marginBottom: "15px" }}
            />
            Remember me
          </label>

          <div className="errorMsg">{props.error}</div>

          <div className="clearfix">
            <button
              type="button"
              onClick={() => props.setSignUp(false)}
              className="cancelbtn"
            >
              Cancel
            </button>
            <button type="submit" className="signup">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
