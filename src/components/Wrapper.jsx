import style from "styled-components";

export const Wrapper = style.div`
  user-select: none;
  display: flex;
  gap: ${({ gap }) => (gap ? gap : "1rem")};
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : "row"};
  width: ${({ width }) => (width ? width : "unset")};
  height: ${({ height }) => (height ? height : "unset")};
  border: ${({ border }) => (border ? `${border}px solid black` : "none")};
  justify-content: ${({ contentFlow }) =>
    contentFlow ? contentFlow : "flex-start"};
  align-items: ${({ itemFlow }) => (itemFlow ? itemFlow : "center")};
  border-radius: 1rem;
  background: ${({ color }) => (color ? color : "none")};
  box-sizing: border-box;
  padding-left: ${({ paddingLeft }) => (paddingLeft ? paddingLeft : "unset")};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "unset")};
  cursor: ${({ cursor }) => (cursor ? cursor : "unset")};
`;
