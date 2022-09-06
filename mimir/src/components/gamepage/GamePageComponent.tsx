import styled, { css } from 'styled-components'
import {NewGameComponent} from "./NewGameComponent";
import {OngoingGameComponent} from "./OngoingGameComponent";
import {useReducer} from "react";
import {GameStateEnum, gameStateReducer, initialGameState} from "../../reducers/gameStateReducer";
import {EndGameComponent} from "./EndGameComponent";

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

  const [gameState, dispatchGameState] = useReducer(
      gameStateReducer,
      initialGameState
  );

  const getGameStateComponent = () => {
      if(gameState == GameStateEnum.NO_GAME) {
        return <NewGameComponent />
      }
      if(gameState == GameStateEnum.RUNNING) {
        return <OngoingGameComponent />
      }
      if(gameState == GameStateEnum.FINISHED) {
        return <EndGameComponent />
      }
      return <NewGameComponent />

  }

  return (
      getGameStateComponent()
  );
};
