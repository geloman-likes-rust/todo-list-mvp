import { Wrapper } from "../components/Wrapper";
import { Label } from "../components/Label";
import { TextArea } from "../components/TextArea";
import { useTodoDetails } from "../model/useTodoDetails";

export const TodoDetails = ({ todoId, todoTitle, todoDescription }) => {
  const { updateTodoTitle, updateTodoDescription } = useTodoDetails();
  return (
    <Wrapper
      className="todo-details"
      height="300px"
      width="80%"
      shadow="10px"
      contentFlow="space-evenly"
    >
      <Wrapper flexDirection="column">
        <Label fontSize="35px">Title</Label>
        <TextArea
          fontSize="30px"
          fontWeight="bold"
          width="300px"
          height="100px"
          defaultValue={todoTitle}
          onChange={updateTodoTitle(todoId)}
        />
      </Wrapper>
      <Wrapper flexDirection="column">
        <Label fontSize="35px">Description</Label>
        <TextArea
          fontSize="30px"
          width="300px"
          height="100px"
          defaultValue={todoDescription}
          onChange={updateTodoDescription(todoId)}
        />
      </Wrapper>
    </Wrapper>
  );
};
