import React, { useState } from "react";
import "../App.css"

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (editIndex === null) {
      setTodos([...todos, inputValue]);
    } else {
      const newTodos = [...todos];
      newTodos[editIndex] = editValue;
      setTodos(newTodos);
      setEditIndex(null);
      setEditValue("");
    }
    setInputValue("");
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditValue(todos[index]);
  };

  const handleDelete = (index) => {
    setTodos([...todos.filter((_, i) => i !== index)]);
  };

  return (
    <>
      <div className="App">
        <h1 className="title">Todo App</h1>
        <input
          className="mainInput"
          value={inputValue}
          onChange={handleChange}
        />
        <button className="addBtn" onClick={handleSubmit}>
          {editIndex === null ? "Add" : "Update"}
        </button>
        {todos.length === 0 ? (
          <p className="no-todo">No todos left</p>
        ) : (
          todos.map((todo, index) => (
            <div className="todos" key={index}>
              {editIndex === index ? (
                <>
                  <input
                    className="edited"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                  />
                  <button className="updateBtn" onClick={handleSubmit}>
                    Update
                  </button>
                </>
              ) : (
                <>
                  <p className="todo">{todo}</p>
                  <button className="editBtn" onClick={() => handleEdit(index)}>
                    Edit
                  </button>
                  <button
                    className="deleteBtn"
                    onClick={() => handleDelete(index)}
                  >
                    X
                  </button>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default App;
