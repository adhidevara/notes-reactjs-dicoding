import React, { useState } from "react";
import Input from "./Input";
import PropTypes from "prop-types";
import { handleClick } from "./Alert";
import { useNavigate } from 'react-router-dom';

const Content = ({ notes, setNotes }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title || !body) {
      handleClick({
        title: "Error",
        text: "Titles and Notes are Required!",
        icon: "error",
      });
      return;
    }

    const newId =  notes.length + 1;
    const date = new Date().toISOString();
    const note = { id: newId, title, body, archived: false, createdAt: date };

    
    setNotes((prevNotes) => [...prevNotes, note]);
    setTitle("");
    setBody("");
  };
  

  return (
    <div className="note-input">
      <h1>New Notes✏️</h1>
      <form onSubmit={handleSubmit}>
        <p className="note-input__title__char-limit">
          Characters left : {50 - title.length}
        </p>
        <Input
          value={title}
          onChange={setTitle}
          name="title"
          type="text"
          placeholder="✒️Title"
        />
        <Input
          value={body}
          onChange={setBody}
          name="body"
          type="textarea"
          placeholder="✍️Write the notes here"
        />
        <button
          type="submit"
          className="create-btn"
          onClick={() =>
            handleClick({
              title: "Success Create Note",
              text: `Note "${title}" has been created`,
              icon: "success",
            },
            setTimeout(() => {
              navigate('/home');
            }, 100)
            )}
        >
          📤Submit
        </button>
      </form>
    </div>
  );
};

Content.propTypes = {
  notesAll: PropTypes.array.isRequired,
  setNotes: PropTypes.func.isRequired,
};

export default Content;
