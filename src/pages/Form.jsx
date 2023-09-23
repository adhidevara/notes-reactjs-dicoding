import React from "react";
import PropTypes from "prop-types"; // Import prop-types
import Content from "../components/Content";

const Form = ({ notesAll, setNotes }) => (
  <div className="note-app__body">
    <Content setNotes={setNotes} notes={notesAll}/>
  </div>
);

Form.propTypes = {
  notesAll: PropTypes.array.isRequired,
  setNotes: PropTypes.func.isRequired,
};

export default Form;
