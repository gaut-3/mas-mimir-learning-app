import styled from "styled-components";
import { NewGameComponent } from "./NewGameComponent";
import { OngoingGameComponent } from "./OngoingGameComponent";
import { useContext, useEffect, useState } from "react";
import { EndGameComponent } from "./EndGameComponent";
import { GameStateEnum } from "../../utils/GameStateEnum";
import { AppContext } from "../../store/GameContext";
import { fetchGame } from "../../services/GameService";
import { GameActionTypeEnum } from "../../models/GameAction";
import {useTranslation} from "../../utils/LanguageTranslation";

const getGameStateComponent = (state: GameStateEnum) => {
  if (state === GameStateEnum.NO_GAME) {
    return <NewGameComponent />;
  }
  if (state === GameStateEnum.RUNNING) {
    return <OngoingGameComponent />;
  }
  if (state === GameStateEnum.FINISHED) {
    return <EndGameComponent />;
  }
  return <NewGameComponent />;
};

export const GamePageComponent = () => {
  const { state, dispatch } = useContext(AppContext);
  const [gameStateComponent, setGameStateComponent] = useState(
    getGameStateComponent(state)
  );

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
  const test = useTranslation();

  useEffect(() => {
    console.log("game ", state)
    const onMount = async () => {
      const game = await fetchGame();
      if (game) {
        if (game.solved.length === game.cardCount) {
          dispatch({ game: game, type: GameActionTypeEnum.FinishGame });
        } else {
          dispatch({ game: game, type: GameActionTypeEnum.SetGame });
        }
      }
    };
      onMount();
  }, []);

  useEffect(() => {
    setGameStateComponent(getGameStateComponent(state));
  }, [state]);

  return gameStateComponent;
};
