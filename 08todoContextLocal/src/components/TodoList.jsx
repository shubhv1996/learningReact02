import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";
import { IoMdCheckboxOutline } from "react-icons/io";

function TodoList({ todo }) {
  const { updateTodo, toggleCompleted, deleteTodo, todos } = useTodo();

  const [isEditable, setIsEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const editTodo = () => {
    if (todo.completed) return;

    setIsEditable((prev) => !prev);

    if (isEditable) {
      updateTodo(todo.id, { ...todo, todo: todoMsg });
      setIsEditable(false);
    }
  };

  const remove = () => {
    deleteTodo(todo.id);
  };

  const toggleComplete = () => {
    toggleCompleted(todo.id);
  };

  return (
    <div>
      <div className="bg-gray-600 flex items-center justify-center max-w-[78vw] mx-auto ">
        <div className="flex gap-2 mx-2 items-center">
          <div>
            {todo.completed ? (
              <IoMdCheckboxOutline
                onClick={toggleComplete}
                className="text-white flex items-center justify-center"
              />
            ) : (
              <input
                type="checkbox"
                className="cursor-pointer"
                onClick={toggleComplete}
              />
            )}
          </div>
          <input
            type="text"
            value={todoMsg}
            onChange={(e) => setTodoMsg(e.target.value)}
            readOnly={!isEditable}
            className={`bg-white p-1 overflow-clip w-[65vw] ${
              todo.completed ? `line-through` : ""
            } ${isEditable ? "border-2" : "border-transparent"} `}
          />
        </div>
        <div className="flex gap-2 text-white mx-2.5 items-center justify-end">
          {<button
            disabled={todo.completed}
            className={`bg-blue-600 text-sm p-1 rounded h-fit border-1 ${
              todo.completed ? `cursor-not-allowed` : `cursor-pointer`
            } `}
            onClick={editTodo}
          >
            {isEditable ? "Save" : "Edit"}
          </button>}
          <button
            className="bg-blue-600 text-sm p-1 my-1 rounded cursor-pointer border-1"
            onClick={remove}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
