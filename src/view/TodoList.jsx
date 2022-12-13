import { Wrapper } from "../components/Wrapper";
import { Todo } from "./Todo";

export const TodoList = ({ todos }) => {
  return (
    <Wrapper
      marginTop="5vh"
      width="80vw"
      flexDirection="column"
      itemFlow="center"
    >
      {todos.map((todo) => (
        <Todo key={todo.id} todoId={todo.id} todoTitle={todo.title} />
      ))}
    </Wrapper>
  );
};
