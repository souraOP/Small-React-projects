//handling events

import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);

  function handleClicked() {
    setHeadingText("Submitted");
  }

  function handleMouseOver(){
    setMouseOver(true);
  }

  function handleMouseOut(){
    setMouseOver(false);
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button 
        style={{ backgroundColor: isMouseOver && "black"}} 
        onClick={handleClicked}
        onMouseOver = {handleMouseOver}
        onMouseOut = {handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
