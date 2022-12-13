import style from "styled-components";

export const TextArea = style.textarea.attrs({ spellCheck: false })`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "26px")};
  border-sizing: border-box;
  border-radius: 1rem;
  resize: none;
`;
