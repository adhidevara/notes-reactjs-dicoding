import React from "react";
import PropTypes from "prop-types";
import Input from "./Input";
import { Link } from "react-router-dom";

const Header = ({ search, setQuery }) => {
  return (
    <div className="note-app__header">
      <h1>
        <Link to="home">📓Notes App</Link>
      </h1>
      
      <div className="note-search">
        <Input
          value={search}
          onChange={setQuery}
          type="search"
          id="search_note"
          name="search_note"
          placeholder="🔎Search Notes"
        />
      </div>

      <h3>
        <Link to="archive">📥Archive</Link>
      </h3>
      
    </div>
  );
};

Header.propTypes = {
  search: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
};

export default Header;
