import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [isLarge, setIsLarge] = useState(false);
  const { handleClick, handleInput } = props;
  function enlarge() {
    setIsLarge(true);
  }
  return (
    <div>
      <form className="create-note">
        {isLarge && (
          <input onChange={handleInput} name="title" placeholder="Title" />
        )}
        <textarea
          onClick={enlarge}
          onChange={handleInput}
          name="content"
          placeholder="Take a note..."
          rows={isLarge ? 3 : 1}
        />
        {isLarge && (
          <Zoom in={true}>
            <Fab onClick={handleClick}>
              <AddIcon />
            </Fab>
          </Zoom>
        )}
      </form>
    </div>
  );
}

export default CreateArea;
