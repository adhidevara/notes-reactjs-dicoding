import React from "react";
import List from "../components/List";
import { Link } from "react-router-dom";

const Home = ({ notesUnarchive, setNotes }) => (
  <div className="note-app__body">
    <Link to="/form"><h1>Create Notes ✏️</h1></Link>
    <List label="🗒️All Notes"setNotes={setNotes} notes={notesUnarchive} />
  </div>
);

export default Home;
