import style, { keyframes } from "styled-components";

const scaleUpAnimation = keyframes`
  from {
    transform: scale(50%);
  }

  to {
    transform: scale(100%);
  }
`;

export const PopUp = style.div`
  width: 450px;
  height: 750px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: white;
  margin-left: auto;
  margin-right: auto;
  z-index: 2;
  border-radius: 1rem;
  animation: ${scaleUpAnimation} 500ms;
`;
