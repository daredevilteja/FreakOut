import React, { useState } from "react";

export default function Posts(props) {
  const [editedItem, setEditedItem] = useState(props.item);
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
        <div>
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
        <>
          <div>{props.item}</div>
          <button className="edit" onClick={() => setEditMode(true)}>
            Edit
          </button>
          <button
            className="delete"
            onClick={() => props.deleteHandler(props.idx)}
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
}
