import styled from "styled-components";
import { NewGameComponent } from "./NewGameComponent";
import { OngoingGameComponent } from "./OngoingGameComponent";
import {useContext, useEffect, useReducer, useState} from "react";
import { EndGameComponent } from "./EndGameComponent";
import {GameStateEnum} from "../../utils/GameStateEnum";
import {Game, GameState} from "../../store/GameReducer";

interface Props {
  gameState: GameState
  onGameChange: (game: Game) => void
}


export const GamePageComponent = ({gameState, onGameChange}: Props) => {
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

  //const { vehicles, selectedVehicles } = state as IAppState
 // console.log("gp ", gameState);

  const getGameStateComponent = (game: GameState) => {
    console.log("getGameStateComponent gamestate", game);
    if (game.state == GameStateEnum.NO_GAME) {
      return <NewGameComponent onGameChange={onGameChange} gameState={gameState} />;
    }
    if (game.state === GameStateEnum.RUNNING) {
      return <OngoingGameComponent />;
    }
    if (game.state == GameStateEnum.FINISHED) {
      return <EndGameComponent />;
    }
    return <NewGameComponent onGameChange={onGameChange} gameState={gameState}  />;
  };

  const [gameStateComponent, setGameStateComponent] = useState(
    getGameStateComponent(gameState)
  );

  useEffect(() => {
    console.log("useeffect gameState ", gameState);
    setGameStateComponent(getGameStateComponent(gameState));
  }, [gameState, onGameChange]);

  return gameStateComponent;
};
