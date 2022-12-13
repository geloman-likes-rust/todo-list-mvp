import { useState } from "react";
export function useTodos() {
  const [serialId, setSerialId] = useState(1);
  const [todos, setTodos] = useState([]);

  function updateTodos() {
    const todoTitleContent = document.getElementById("title-content").value;
    const todoDescriptionContent = document.getElementById(
      "description-content"
    ).value;
    setTodos((todos) => [
      {
        id: serialId,
        done: false,
        title: todoTitleContent,
        description: todoDescriptionContent,
      },
      ...todos,
    ]);
    setSerialId((id) => id + 1);
    console.log(todos);
  }
  return { todos, updateTodos };
}
