import styled, { css } from 'styled-components'
import {NewGameComponent} from "./NewGameComponent";
import {OngoingGameComponent} from "./OngoingGameComponent";

export const GamePageComponent = () => {
  const Container = styled.div`
    display: flex;
    flexdirection: row;
  `;
  const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
  `;

  return (
    // <NewGameComponent></NewGameComponent>
    <OngoingGameComponent></OngoingGameComponent>
  );
};
