import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Notes from "./components/Notes";
import CreateArea from "./components/CreateArea";
function App() {
  const [toDo, addToDo] = useState({
    title: "",
    content: "",
  });
  const [notes, addNote] = useState([]);
  function handleInput(event) {
    const { name, value } = event.target;
    addToDo((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  function handleClick(event) {
    event.preventDefault();
    addNote((prevValue) => {
      return [...prevValue, toDo];
    });
  }
  return (
    <div>
      <Header />
      <CreateArea handleClick={handleClick} handleInput={handleInput} />
      {notes.map((note) => {
        return <Notes title={note.title} content={note.content} />;
      })}

      <Footer />
    </div>
  );
}

export default App;
