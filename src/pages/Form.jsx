import React from "react";
import Content from "../components/Content";

const Form = ({ notesAll, setNotes }) => (
  <div className="note-app__body">
    <Content setNotes={setNotes} notes={notesAll}/>
  </div>
);

export default Form;
