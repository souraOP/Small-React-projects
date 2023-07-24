import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setInputItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItems() {
    setInputItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>Bablu Bodmas List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value = {inputText}/>
        <button onClick={addItems}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(todoItem => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
