import React, { useEffect, useState } from "react";

import "./styles.css";

export default function Profile(props) {
  const [editMode, setEditMode] = useState(false);
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [sex, setSex] = useState("");
  const [country, setCountry] = useState("");
  const [phnum, setPhnum] = useState(0);

  useEffect(() => {
    fetch("http://localhost:9999/profile", {
      method: "GET",
      credentials: "include",
    })
      .then((r) => r.json())
      .then((r) => {
        setUserName(r.userName);
        setEmail(r.email);
        setDob(r.dob);
        setSex(r.sex);
        setCountry(r.country);
        setPhnum(r.phNum);
      });
  }, []);

  const isNullOrUndefined = (val) =>
    val === null || val === undefined || val === "";

  const formHandler = async (e) => {
    e.preventDefault();

    const values = [setUserName, setDob, setSex, setCountry, setPhnum];

    values.forEach((val, idx) => {
      if (!isNullOrUndefined(e.target[idx].value)) {
        val(e.target[idx].value);
      }
    });

    // setUserName(e.target[0].value);
    // setDob(e.target[1].value);
    // setSex(e.target[2].value);
    // setCountry(e.target[3].value);
    // setPhnum(e.target[4].value);

    await fetch("http://localhost:9999/profile", {
      method: "PUT",
      body: JSON.stringify({
        userName: e.target[0].value ? e.target[0].value : username,
        dob: e.target[1].value ? e.target[1].value : dob,
        sex: e.target[2].value ? e.target[2].value : sex,
        country: e.target[3].value ? e.target[3].value : country,
        phNum: e.target[4].value ? e.target[4].value : phnum,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then(setEditMode(!editMode));
  };

  return (
    <>
      {!editMode ? (
        <div className="profilePara">
          <p>
            <span>Name: </span>
            {username}
          </p>
          <p>
            <span>Email: </span>
            {email}
          </p>
          <p>
            <span>DOB: </span>
            {dob}
          </p>
          <p>
            <span>Sex: </span>
            {sex}
          </p>
          <p>
            <span>Country: </span>
            {country}
          </p>
          <p>
            <span>Phone: </span>
            {phnum}
          </p>
          <div>
            <button onClick={() => setEditMode(true)}>Edit</button>
          </div>
        </div>
      ) : (
        <div>
          <form onSubmit={(e) => formHandler(e)} className="profileForm">
            <label htmlFor="username">Name:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder={username}
            ></input>
            <br />
            <label htmlFor="dob">DOB:</label>
            <input type="date" id="dob" name="dob" placeholder={dob}></input>
            <br />
            <label htmlFor="sex">Sex: </label>
            <input type="text" id="sex" name="sex" placeholder={sex}></input>
            <br />
            <label htmlFor="country">Country:</label>
            <input
              type="text"
              id="country"
              name="country"
              placeholder={country}
            ></input>
            <br />
            <label htmlFor="phNum">Phone:</label>
            <input
              type="number"
              id="phNum"
              name="phNum"
              placeholder={phnum}
            ></input>
            <br />
            <div className="submit">
              <input type="submit" value="Submit"></input>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
