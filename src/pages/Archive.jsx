import React from "react";
import PropTypes from "prop-types";
import List from "../components/List";

const Archive = ({ notesArchive, setNotes }) => (
  <div className="note-app__body">
    <List label="📥Archive Notes" setNotes={setNotes} notes={notesArchive} />
  </div>
);

Archive.propTypes = {
  notesArchive: PropTypes.array.isRequired,
  setNotes: PropTypes.func.isRequired,
};

export default Archive;
