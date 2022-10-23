import styled from "styled-components";

export interface ButtonProps {
  size?: ButtonSize;
}

export enum ButtonSize {
  DEFAULT = "17px 40px",
  SMALL = "12px 25px",
}

export const Button = styled.button<ButtonProps>`
  background: black;
  border-radius: 3px;
  color: white;
  padding: ${(p) => (p.size ? p.size : ButtonSize.DEFAULT)};
  border: none; /*Firefox fix*/
`;
