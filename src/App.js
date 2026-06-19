import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo(){
    if(task.trim === ""){
      return;
    }
    const newTodo = {
      text : task,
      completed : false
    };
    setTodos([...todos, newTodo])
    setTask("")
  }
  function toggleTodo(index){
    const updateTool = [...todos];

    updateTool[index].completed = !updateTool[index].completed;

    setTodos(updateTool);
  }
  return (
    <div>
      <h1>Todo App</h1>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(index)}
            />

            <span
              style={{
                textDecoration: todo.completed
                  ? "line-through"
                  : "none"
              }}
            >
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
