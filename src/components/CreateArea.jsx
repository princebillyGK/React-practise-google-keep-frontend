import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
function CreateArea(props) {
  const [isFocused, setIsFocused] = useState(false);
  const [note, setNote] = useState({ title: "", content: "" });
  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form
        className="create-note"
        onFocus={() => setIsFocused(true)}
        onFocusOut={() => setIsFocused(true)}
      >
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          style={{ display: isFocused ? "inherit" : "none" }}
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isFocused ? 3 : 1}
        />
        <Zoom in={isFocused ? true : false}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
