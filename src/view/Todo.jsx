import { Wrapper } from "../components/Wrapper";
import { Text } from "../components/Text";
import { CheckBox } from "../components/CheckBox";

export const Todo = ({ todoTitle, todoId }) => {
  return (
    <Wrapper
      paddingLeft="20px"
      id={todoId}
      height="100px"
      width="80%"
      shadow="3px"
    >
      <CheckBox />
      <Text fontSize="50px" fontWeight="bold" color="#181D31">
        {todoTitle}
      </Text>
    </Wrapper>
  );
};
