import { Wrapper } from "../components/Wrapper";
import { Text } from "../components/Text";
import { CheckBox } from "../components/CheckBox";
import { useState } from "react";
import { TodoDetails } from "./TodoDetails";

export const Todo = ({ todoTitle, todoId, todoSummary }) => {
  const [details, showDetails] = useState(false);
  const handleClick = (event) => {
    if (event.target.tagName === "INPUT") return;
    showDetails(() => !details);
  };
  return (
    <>
      <Wrapper
        paddingLeft="20px"
        id={todoId}
        height="100px"
        width="80%"
        shadow="3px"
        onClick={handleClick}
        cursor="pointer"
      >
        <CheckBox />
        <Text fontSize="50px" fontWeight="bold" color="#181D31">
          {todoTitle}
        </Text>
      </Wrapper>
      {details && (
        <TodoDetails
          todoId={todoId}
          todoTitle={todoTitle}
          todoDescription={todoSummary}
        />
      )}
    </>
  );
};
