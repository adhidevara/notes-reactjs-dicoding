import React from "react";
import PropTypes from "prop-types";

const NoteItemAction = ({ onDeleteNote, onArchiveNote, id, archived }) => {
  return (
    <div className="note-item__action">
      <button
        id={id}
        onClick={() => onDeleteNote(id)}
        aria-label="Delete "
        className="note-item__delete-button"
      >
        🗑️
      </button>
      <button
        id={id}
        onClick={() => onArchiveNote(id)}
        aria-label="Archive "
        className="note-item__archive-button"
      >
        {archived ? "📤" : "📥"}
      </button>
    </div>
  );
};

NoteItemAction.propTypes = {
  onDeleteNote: PropTypes.func.isRequired,
  onArchiveNote: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  archived: PropTypes.bool.isRequired,
};

export default NoteItemAction;
