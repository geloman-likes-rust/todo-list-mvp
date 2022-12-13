import { Wrapper } from "../components/Wrapper";
import { Text } from "../components/Text";
import { CheckBox } from "../components/CheckBox";

export const Todo = ({ todoTitle, todoId }) => {
  return (
    <Wrapper
      paddingLeft="20px"
      id={todoId}
      color="gray"
      height="100px"
      width="80%"
    >
      <CheckBox />
      <Text color="white">{todoTitle}</Text>
    </Wrapper>
  );
};
