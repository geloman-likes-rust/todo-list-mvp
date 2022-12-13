import style from "styled-components";

export const PopUp = style.div`
  width: 600px;
  height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: white;
  margin-left: auto;
  margin-right: auto;
  z-index: 2;
  border-radius: 1rem;
`;
