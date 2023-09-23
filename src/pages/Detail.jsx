import React from "react";
import { useParams } from "react-router-dom";

function Detail({ notesAll, setNotes }) {
    const { id } = useParams();

    const note = notesAll.filter((item) => item.id === parseInt(id)).map((note) => note);
    
    console.log(note);

    const detail = note[0]
    const date = new Date(detail?.createdAt)
    const formattedDate = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

    if (!note) {
      return <div>Notes Details Not Found</div>;
    }

    return (
        <div className="note-app__body">
          <h2>{detail?.title}</h2>
          <p>{formattedDate}</p>
          <br />
          <p>{detail?.body}</p>
        </div>
    );
}

export default Detail;
