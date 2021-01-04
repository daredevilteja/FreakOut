import React, { useEffect, useState } from "react";
import Header from "../Header";
import Posts from "../Posts";
import "./styles.css";

export default function AfterLogin(props) {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    fetch("http://localhost:9999/home", {
      method: "POST",
      body: JSON.stringify({ content: newItem }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((r) => r.json())
      .then((resp) => {
        items.unshift(resp);
        setItems([...items]);
        setNewItem("");
      });
  };

  const newItemChanged = (event) => {
    setNewItem(event.target.value);
  };

  const editHandler = (val, idx) => {
    const idToEdit = items[idx]._id;
    fetch(`http://localhost:9999/myPosts/${idToEdit}`, {
      method: "PUT",
      body: JSON.stringify({ content: val }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((r) => r.json())
      .then((r) => {
        items[idx] = r;
        setItems([...items]);
      });
  };

  const deleteHandler = (idx) => {
    const idToDelete = items[idx]._id;
    fetch(`http://localhost:9999/myPosts/${idToDelete}`, {
      method: "DELETE",
      credentials: "include",
    }).then((r) => {
      items.splice(idx, 1);
      setItems([...items]);
    });
  };

  useEffect(() => {
    fetch("http://localhost:9999/home", { credentials: "include" })
      .then((r) => r.json())
      .then((arr) => {
        const sortedArr = arr.sort((a, b) => {
          const aDate = new Date(a.creationTime).valueOf();
          const bDate = new Date(b.creationTime).valueOf();
          return bDate - aDate;
        });
        setItems(sortedArr);
      });
  }, []);

  return (
    <>
      <Header />

      <div className="container-main">
        <aside>
          <ul>
            <li>Home</li>
            <li>My Posts</li>
            <li>Profile</li>
          </ul>
          <button onClick={props.logoutHandler}>Logout</button>
        </aside>
        <div className="posts">
          <div>
            <textarea
              placeholder="Enter your post"
              onChange={newItemChanged}
              value={newItem}
            ></textarea>
            <button onClick={addItem} disabled={newItem.trim().length === 0}>
              Post
            </button>
          </div>
          <div>
            {items.map((val, idx) => (
              <Posts
                item={val}
                key={val._id}
                idx={idx}
                editHandler={editHandler}
                deleteHandler={deleteHandler}
                email={props.username}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
