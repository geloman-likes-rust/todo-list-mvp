import { Text } from "../components/Text";
import { Wrapper } from "../components/Wrapper";
export const AddTask = ({ handleClick }) => {
  return (
    <Wrapper
      cursor="pointer"
      contentFlow="center"
      width="200px"
      height="50px"
      shadow="10px"
      onClick={handleClick}
    >
      <Text fontWeight="bold" fontSize="35px">
        Add Task
      </Text>
    </Wrapper>
  );
};
