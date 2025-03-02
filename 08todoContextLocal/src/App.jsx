import { useEffect, useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import { TodoProvider } from "./contexts/TodoContext";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), completed: false, todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    console.log(todo.id);
    setTodos((prev) =>
      prev?.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleCompleted = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleCompleted }}
    >
      <TodoInput />
      <div className="bg-gray-600 min-h-[86vh] pt-4">
        {todos?.map((todo) => (
          <div key={todo.id}>
            <TodoList todo={todo} />
          </div>
        ))}
      </div>
    </TodoProvider>
  );
}

export default App;
