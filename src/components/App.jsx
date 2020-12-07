import React, { useState } from "react";

function App() {
  const [oldList, setList] = useState("");
  const [items, setItems] = useState([]);
  function addList(event) {
    const newValue = event.target.value;
    setList(newValue);
  }
  function addItem() {
    setItems((preValue) => {
      return [...preValue, oldList];
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={addList} value={oldList} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => {
            return <li>{todoItem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
