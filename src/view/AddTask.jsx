import { Text } from "../components/Text";
import { Wrapper } from "../components/Wrapper";
export const AddTask = ({ handleClick }) => {
  return (
    <Wrapper
      cursor="pointer"
      contentFlow="center"
      border="1"
      width="200px"
      height="50px"
      onClick={handleClick}
    >
      <Text fontWeight="bold" fontSize="35px">
        Add Task
      </Text>
    </Wrapper>
  );
};
