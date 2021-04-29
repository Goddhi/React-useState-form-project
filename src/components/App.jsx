import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [submit, setSubmit] = useState("");
  const [isMouseOver, setIsMouseOver] = useState(false);

  function handleclick(event) {
    setName(event.target.value);
    // console.log(event.target.value);
  }

  function clicked(event) {
    setSubmit(name);
    event.preventDefault();
  }

  function handleMouseOver() {
    setIsMouseOver(true);
  }
  function handleMouseOut() {
    setIsMouseOver(false);
  }

  return (
    <div className="container">
      <h1>Hello {submit}</h1>
      <form>
        <input
          onChange={handleclick}
          type="text"
          placeholder="What's your name?"
        />
        <button
          style={{ backgroundColor: isMouseOver ? "black" : "white" }}
          onClick={clicked}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Submit
        </button>
      </form>
      <p>Created by Goddhi</p>
    </div>
  );
}

export default App;
