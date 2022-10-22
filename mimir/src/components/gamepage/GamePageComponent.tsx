import styled from "styled-components";
import { NewGameComponent } from "./NewGameComponent";
import { OngoingGameComponent } from "./OngoingGameComponent";
import { useContext, useEffect, useState } from "react";
import { EndGameComponent } from "./EndGameComponent";
import { GameStateEnum } from "../../utils/GameStateEnum";
import { AppContext } from "../../store/GameContext";
import { fetchGame } from "../../services/GameService";
import { GameActionTypeEnum } from "../../models/GameAction";
import useTranslation from "../../hooks/LanguageTranslation";
import { I18nContext } from "../../store/I18nContext";

export const GamePageComponent = () => {
  const translate = useTranslation();
  const getGameStateComponent = (state: GameStateEnum) => {
    console.log("getGameStateComponent", translate("newGameButton"));
    if (state === GameStateEnum.NO_GAME) {
      return <NewGameComponent translate={translate} />;
    }
    if (state === GameStateEnum.RUNNING) {
      return <OngoingGameComponent />;
    }
    if (state === GameStateEnum.FINISHED) {
      return <EndGameComponent />;
    }
    return <NewGameComponent translate={translate} />;
  };
  const { state, dispatch } = useContext(AppContext);
  const [gameStateComponent, setGameStateComponent] = useState(
    getGameStateComponent(state)
  );

  console.log("translate gamepage", translate("newGameButton"));
  const Container = styled.div`
    display: flex;
    flexdirection: row;
  `;

  useEffect(() => {
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

  return (
    <>
      {(state === GameStateEnum.NO_GAME && (
        <NewGameComponent translate={translate} />
      )) ||
        (state === GameStateEnum.RUNNING && <OngoingGameComponent />) ||
        (state === GameStateEnum.FINISHED && <EndGameComponent />)}
    </>
  );
};
