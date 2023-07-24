import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

export default function App() {
  const [notes, setNotes] = useState([]);

  function AddNote(inputText) {
    setNotes((prevNotes) => {
      return [...prevNotes, inputText];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={AddNote} />
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      {notes.map((noteitem, index) => (
        <Note
          key={index}
          id={index}
          title={noteitem.title}
          content={noteitem.content}
          onChecked={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}


