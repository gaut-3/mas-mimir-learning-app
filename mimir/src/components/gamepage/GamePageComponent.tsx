import styled from "styled-components";
import { NewGameComponent } from "./NewGameComponent";
import { OngoingGameComponent } from "./OngoingGameComponent";
import { useContext, useEffect, useState } from "react";
import { EndGameComponent } from "./EndGameComponent";
import { GameStateEnum } from "../../utils/GameStateEnum";
import { AppContext } from "../../store/GameContext";
import {GameState} from "../../models/GameState";
import {Game} from "../../models/Game";

interface Props {
  gameState: GameState;
  onGameChange: (game: Game) => void;
}

export const GamePageComponent = ({ gameState, onGameChange }: Props) => {
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

  const { game, state, dispatch } = useContext(AppContext);

  const getGameStateComponent = (state: GameStateEnum) => {
    console.log("getGameStateComponent gamestate", game);
    if (state == GameStateEnum.NO_GAME) {
      return (
        <NewGameComponent onGameChange={onGameChange} gameState={gameState} />
      );
    }
    if (state === GameStateEnum.RUNNING) {
      return <OngoingGameComponent />;
    }
    if (state == GameStateEnum.FINISHED) {
      return <EndGameComponent />;
    }
    return (
      <NewGameComponent onGameChange={onGameChange} gameState={gameState} />
    );
  };

  const [gameStateComponent, setGameStateComponent] = useState(
    getGameStateComponent(state)
  );

  useEffect(() => {
    console.log("useeffect gameState ", state);
    setGameStateComponent(getGameStateComponent(state));
  }, [state]);

  return gameStateComponent;
};
