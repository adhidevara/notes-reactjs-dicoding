import React from "react";
import List from "../components/List";
import PropTypes from "prop-types"; // Import prop-types
import { Link } from "react-router-dom";

const Home = ({ notesUnarchive, setNotes }) => (
  <div className="note-app__body">
    <Link to="/form"><h1>Create Notes ✏️</h1></Link>
    <List label="🗒️All Notes"setNotes={setNotes} notes={notesUnarchive} />
  </div>
);

Home.propTypes = {
  notesUnarchive: PropTypes.array.isRequired,
  setNotes: PropTypes.func.isRequired,
};

export default Home;
