import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoInput() {
  const [todo, setTodo] = useState("");
  const [showError, setShowError] = useState()

  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    setShowError()

    if(!todo) {setShowError("Enter task to proceed!")
      return
    }
    
    if (todo && todo.length > 0) {
      addTodo(todo);
    }
    setTodo("");
  };


  return (
    <div>
      <form
        className="mx-auto mt-8 mb-8 w-[80vw]  flex gap-2 justify-center"
        onSubmit={add}
      >
        <div>
          <input
            type="text"
            placeholder="Add task here..."
            className="border-white placeholder-gray-400 text-sm text-nowrap text-white border-1 outline-1 p-1 m-1 rounded-lg w-80"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />

          <p className="text-red-500  text-sm">
            <em>{showError}</em>
          </p>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white border-1 rounded p-1 m-1 w-fit h-fit cursor-pointer text-sm text-nowrap"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}

export default TodoInput;
