import React, {createContext, useContext} from 'react'

export const TodoContext = createContext({
  todos: [{
  }],

  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  toggleCompleted: (id) => {},
  deleteTodo: (id) => {},
});

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider
