import { NewGameComponent } from "./NewGameComponent";
import { OngoingGameComponent } from "./OngoingGameComponent";
import { useContext, useEffect } from "react";
import { EndGameComponent } from "./EndGameComponent";
import { GameStateEnum } from "../../utils/GameStateEnum";
import { AppContext } from "../../store/GameContext";
import { fetchGame } from "../../services/GameService";
import { GameActionTypeEnum } from "../../models/GameAction";

export const GamePageComponent = () => {
  const { state, dispatch } = useContext(AppContext);

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

  return (
    <>
      {(state === GameStateEnum.NO_GAME && <NewGameComponent />) ||
        (state === GameStateEnum.RUNNING && <OngoingGameComponent />) ||
        (state === GameStateEnum.FINISHED && <EndGameComponent />)}
    </>
  );
};
