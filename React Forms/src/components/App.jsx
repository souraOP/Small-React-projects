import React, { useState } from "react";

function App() {
  // const [headingText, setHeadingText] = useState("Hello");
  const [nameHeadingText, setNameHeadingText] = useState("");
  const [headerName, setName] = useState("");
  const [isMouseOver, changeColour] = useState(false);

  function handleClicked(event) {
    // setHeadingText("Submitted!");
    setNameHeadingText(headerName);

    event.preventDefault(); // it helps in preventing the page to be refreshed.
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleMouseOver() {
    changeColour(true);
  }

  function handleMouseOut() {
    changeColour(false);
  }

  return (
    <div className="container">
      <h1>Hello {nameHeadingText}</h1>
      <form onSubmit={handleClicked}>
        {" "}
        {/* onSubmit works same as onChange 
        just use onSubmit when using the html form element*/}
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={headerName}
        />
        <button
          type="submit"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          style={{ backgroundColor: isMouseOver && "black" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
