import React from "react";

function Note(props) {

  const { id, title, content, deleteItem } = props;
  return (
    <div className="note" id = {id} >
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={()=>{
        deleteItem(id);
      }}>DELETE</button>
    </div>
  );
}

export default Note;
