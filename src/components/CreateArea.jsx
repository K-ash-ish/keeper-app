import React from "react";
function CreateArea(props) {
  const { handleClick, handleInput } = props;
  return (
    <div>
      <form>
        <input onChange={handleInput} name="title" placeholder="Title" />
        <textarea
          onChange={handleInput}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
