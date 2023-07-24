import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Zoom } from "@mui/material";
import { Fab } from "@mui/material";

export default function CreateArea(props) {
  const [inputText, setInputText] = useState({ title: "", content: "" });
  const [zoom, setZoom] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setInputText((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function Click() {
    setZoom(true);
  }

  return (
    <div>
      <form className="create-note">
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={inputText.title}
          type={!zoom && "hidden"}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          value={inputText.content}
          rows={zoom ? 3 : 1}
          onClick={Click}
        />
        {/* <button type="submit">Add</button> */}
        <Zoom in={zoom}>
          <Fab
            onClick={(event) => {
              props.onAdd(inputText);
              setInputText({ title: "", content: "" });
              event.preventDefault();
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}
