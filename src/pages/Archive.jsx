import React from "react";
import List from "../components/List";

const Archive = ({ notesArchive, setNotes }) => (
  <div className="note-app__body">
    <List label="📥Archive Notes" setNotes={setNotes} notes={notesArchive} />
  </div>
);

export default Archive;
