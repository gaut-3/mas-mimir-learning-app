import styled from "styled-components";
import useTranslation from "../hooks/LanguageTranslation";

export interface ButtonProps {
  size?: ButtonSize;
}

export enum ButtonSize {
  DEFAULT="1.25em 3em",
  SMALL="10px 25px"
}

export const Button = styled.button<ButtonProps>`
    background: black;
    border-radius: 3px;
    color: white;
    padding: ${p => p.size ? p.size : ButtonSize.DEFAULT};
  `;
