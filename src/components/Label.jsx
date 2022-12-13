import style from "styled-components";

export const Label = style.label`
  font-size: ${(props) => props.fontSize};
  font-weight: bold;
  box-sizing: border-box;
  padding-left 10px;
  width: ${({width}) => width ? width : "unset"};
`;
