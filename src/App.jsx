import { useState } from "react";
import "./style.css";

function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });

    setNewItem("")
  }

  function toggleTodo(id, completed){
    setTodos(currentTodos=>{
      return currentTodos.map(todo => {
        if(todo.id ===id ){
          return { ...todo, completed }
        }
    return todo
      })
    })
  }
    
  function deleteTodo(id){
      setTodos(currentTodos=>{
        return currentTodos.filter(todo => 
          todo.id !== id)
      })
 
    }
  

  return (
    <>
      <form className="new-item-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="item">To Do</label>
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            id="item"
          />
        </div>
        <button className="btn">Add</button>
      </form>

      <h1 className="header">To Do List</h1>
      <ul className="list">
        {todos.length === 0 && "No todos"}
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label >
                <input type="checkbox" checked={todo.completed} onChange={e =>toggleTodo(todo.id, e.target.checked)}/>
                {todo.title}
              </label>
              <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)} >Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}


export default App;
