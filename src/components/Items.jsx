import React from "react";
import Action from "./Action";
import ShowItems from "./ShowItems";
import { Link } from "react-router-dom";
import { handleClickConfirm } from "./Alert";

const Items = ({ id, title, body, createdAt, archived, action }) => {
  const onDeleteNote = (item) => {
    handleClickConfirm(
      item,
      action,
      "delete",
      "Are you sure?",
      "You won't be able to Revert this action!",
      "warning",
      "Delete"
    );
  };

  const onArchiveNote = (item) => {
    !archived
      ? handleClickConfirm(
          item,
          action,
          "archive",
          "Are you sure?",
          "Do you want to 'Archive' this note?",
          "info",
          "Yes"
        )
      : handleClickConfirm(
          item,
          action,
          "unarchive",
          "Are you sure?",
          "Do you want to 'Unarchive' this note?",
          "info",
          "Yes"
        );
  };

  return (
    <div className="note-item">
      <Link to={{pathname: `/detail/${id}`}}>
        <ShowItems
          title={title}
          body={body}
          createdAt={createdAt}
          archived={archived}
          action={action}
        />
      </Link>

      <Action
        onDeleteNote={onDeleteNote}
        onArchiveNote={onArchiveNote}
        id={id}
        archived={archived}
      />
      </div>
  );
};

export default Items;
