import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Notes from "./components/Notes";
import CreateArea from "./components/CreateArea";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [toDo, addToDo] = useState({
    title: "",
    content: "",
    id: "",
  });
  const [notes, addNote] = useState([]);
  function handleInput(event) {
    const { name, value } = event.target;
    addToDo((prevValue) => {
      return {
        ...prevValue,
        id: uuidv4(),
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
  function deleteItem(id) {
    console.log(id);
    addNote((prevValue) => {
      return prevValue.filter((note) => {
        return note.id !== id;
        // return note.id !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea handleClick={handleClick} handleInput={handleInput} />
      {notes.map((note) => {
        return (
          <Notes
            key={uuidv4()}
            id={note.id}
            title={note.title}
            content={note.content}
            deleteItem={deleteItem}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
