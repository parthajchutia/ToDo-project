import "./App.css";
import ToDo from "./components/ToDo";
import { useEffect, useState } from "react";
import { getAllToDo, addToDo, updateTodo, deleteToDo } from "./utils/HandleApi";

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  useEffect(() => {
    if (toDo.length === 0) {
      const timer = setTimeout(() => {
        window.location.reload();
      }, 6000);

      return () => clearTimeout(timer);
    }
  }, [toDo]);

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };

  return (
    <div className="App">
      <div
        className="container"
        style={{
          background: "linear-gradient(to right, #6a11cb, #2575fc)",
          minHeight: "100vh",
          padding: "20px",
          marginLeft: "20rem",
          marginRight: "20rem"
        }}
      >
        <h1>List Your TODOs</h1>
        <div className="top" style={{ display: "flex", gap: "10px" }}>
          <input
            type="text"
            placeholder="Add To Do...."
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{
              flexGrow: 1,
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <div
            className="add" 
            style={{background: "black",padding: "1rem",borderRadius:"8px", color: "white"}}
            onClick={
              isUpdating
                ? () =>
                    updateTodo(toDoId, text, setToDo, setText, setIsUpdating)
                : () => addToDo(text, setText, setToDo)
            }
          >
            {isUpdating ? "Update" : "Add"}
          </div>
        </div>

        <div className="list" >
          {Array.isArray(toDo) && toDo.length > 0 ? (
            toDo.map((item) => (
              <ToDo
                key={item._id}
                text={item.text}
                updateMode={() => updateMode(item._id, item.text)}
                deleteToDo={() => deleteToDo(item._id, setToDo)}
              />
            ))
          ) : (
            <p>No ToDos available</p>
          )}
        </div>

        <div>Developed By PJC for learning</div>
      </div>
    </div>
  );
}

export default App;
