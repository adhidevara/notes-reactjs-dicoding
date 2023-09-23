import React from "react";

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

export default NoteItemAction;
