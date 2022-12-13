import { useReducer } from "react";
import { useTodos } from "./useTodos";

export function useTodoDetails() {
  const { setTodos } = useTodos();

  const updateTodoTitle = (todoId) => (event) => {
    setTodos((todos) => {
      return [...todos].map((todo) => {
        if (todo.id === todoId) {
          todo.title = event.target.value;
        }
      });
    });
  };

  const updateTodoDescription = (todoId) => (event) => {
    setTodos((todos) => {
      return [...todos].map((todo) => {
        if (todo.id === todoId) {
          todo.description = event.target.value;
        }
      });
    });
  };

  return { updateTodoTitle, updateTodoDescription };
}
