import Swal from "sweetalert2";
import PropTypes from "prop-types";

const handleClick = ({ title, text, icon }) => {
  Swal.fire({
    title,
    text,
    icon,
    showConfirmButton: false,
    timer: 3000,
  });
};

const handleClickConfirm = (
  item,
  action,
  type,
  title,
  text,
  icon,
  confirmButtonText
) => {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: confirmButtonText,
  }).then((result) => {
    if (type === "delete") {
      if (result.isConfirmed) {
        action((notes) => notes.filter((note) => note.id !== item));
        Swal.fire("Deleted!", "Your Note has been Deleted.", "success");
      }
    } else if (type === "archive" || type === "unarchive") {
      if (result.isConfirmed) {
        action((notes) =>
          notes.map((note) => {
            if (note.id === item) {
              return { ...note, archived: !note.archived };
            }
            return note;
          })
        );
        if (type === "archive") {
          Swal.fire("Archived!", "The Note Archived.", "success");
        } else {
          Swal.fire("Unrchived!", "The Note Unarchived.", "success");
        }
      }
    }
  });
};

handleClick.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

handleClickConfirm.propTypes = {
  item: PropTypes.number.isRequired,
  action: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  confirmButtonText: PropTypes.string.isRequired,
};

export { handleClick, handleClickConfirm };
