import style from "styled-components";

export const Button = style.button`
  width: ${(props) => (props.width ? props.width : "100px")};
  height: ${(props) => (props.height ? props.height : "50px")};
  border-sizing: border-box;
  border-radius: 1rem;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  color: white;
  border: none;
  background: ${(props) => (props.background ? props.background : "green")};
`;
