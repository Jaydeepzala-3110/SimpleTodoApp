import React, { createContext, useContext } from 'react'

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "First todo",
      completed: false
    }
  ],
  addTodo: (todo) => { },
  updateTodo: (id, todo) => { },
  deleteTodo: (id, todo) => { },
  toggleComplete: (todo) => { }
})


export const useTodo = () => {
  return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider;