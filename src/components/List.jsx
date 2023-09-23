import React from "react";
import PropTypes from "prop-types";
import Items from "./Items";

const List = ({ notes, label, setNotes }) => {
  const sortedNotes = [...notes].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
      <h2>{label}</h2>
      <div className="notes-list">
        {notes.length === 0 ? (
          <p className="notes-list__empty-message">Notes Empty</p>
        ) : (
          sortedNotes.map((note) => (
            <Items action={setNotes} key={note.id} {...note} />
          ))
        )}
      </div>
    </>
  );
};

List.propTypes = {
  notes: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  setNotes: PropTypes.func.isRequired,
};

export default List;
