import style from "styled-components";
export const Text = style.p`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "30px")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "unset")};
  color: ${({ color }) => (color ? color : "black")};
`;
