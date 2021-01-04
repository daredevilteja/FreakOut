import React, { useState } from "react";
import "./styles.css";

export default function Posts(props) {
  const [editedItem, setEditedItem] = useState(props.item.content);
  const [editMode, setEditMode] = useState(false);

  const editedItemChanged = (event) => {
    setEditedItem(event.target.value);
  };
  const saveEditedItem = () => {
    props.editHandler(editedItem, props.idx);
    setEditMode(false);
  };

  return (
    <div>
      {editMode ? (
        <div className="post">
          <textarea
            className="editPost"
            onChange={editedItemChanged}
            placeholder="EditPost"
            value={editedItem}
          ></textarea>
          <button
            className="saveTask"
            onClick={saveEditedItem}
            disabled={editedItem.trim().length === 0}
          >
            Save
          </button>
        </div>
      ) : (
        <div className="post">
          <div className="name">
            {props.item.name ? props.item.name : props.item.email}
          </div>
          <div>{props.item.content}</div>
          <div className="listItems">
            <button
              className="edit"
              onClick={() => setEditMode(true)}
              disabled={props.email !== props.item.email}
            >
              Edit
            </button>
            <button
              className="delete"
              onClick={() => props.deleteHandler(props.idx)}
              disabled={props.email !== props.item.email}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
