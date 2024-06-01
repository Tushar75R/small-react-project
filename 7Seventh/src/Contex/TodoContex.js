import { createContext, useContext } from "react";

export const TodoContex = createContext({
  todos: [],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const TodoProvider = TodoContex.Provider;

export default function useTodo(){
    return useContext(TodoContex)
}