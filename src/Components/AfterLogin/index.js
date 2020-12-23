import React, { useState } from "react";
import Posts from "../Posts";
import "./styles.css";

export default function AfterLogin() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    items.push(newItem);
    setItems([...items]);
    setNewItem("");
  };

  const newItemChanged = (event) => {
    setNewItem(event.target.value);
  };

  return (
    <div className="container-main">
      <aside>
        <ul>
          <li>Home</li>
          <li>My Posts</li>
          <li>Profile</li>
        </ul>
      </aside>
      <div className="posts">
        <div>
          <textarea
            placeholder="Enter your post"
            onChange={newItemChanged}
            value={newItem}
          ></textarea>
          <button onClick={addItem}>Post</button>
        </div>
        <div>
          {items.map((val, idx) => (
            <Posts
              item={val}
              key={`${val}_${idx}`}
              idx={idx}
              // editHandler={}
              // deleteHandler={}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
