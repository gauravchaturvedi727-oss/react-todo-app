import { useState } from "react";

function Todo_list(){
    
    const [task, setTasks] = useState("");
    const [todos, setTodos] = useState([]);

    function addTodo(){
        if(task.trim === ""){
            return;
        }
        const newTodo = {
            text : task,
            completed : false
        };
        setTodos([...todos, newTodo]);
        setTasks("");
    }

    function toggleTodo(index){
        const updateTool = [...todos];

        updateTool[index].completed = !updateTool[index].completed;

        setTodos(updateTool);
    }
    return(
        <>
        <h1>Todo List</h1>
        <input type="text"
        value={task}
        onChange={(e) => setTasks(e.target.value)}
        placeholder="Enter Task"></input>

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
        </>
    );
}

export default Todo_list;