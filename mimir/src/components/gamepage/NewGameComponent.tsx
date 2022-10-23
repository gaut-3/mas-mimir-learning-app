import { fetchNewGame } from "../../services/GameService";
import { AppContext } from "../../store/GameContext";
import { useContext } from "react";
import { GameActionTypeEnum } from "../../models/GameAction";
import { Button } from "elements/Button";
import useTranslation from "../../hooks/LanguageTranslation";
import { FlexboxColumn } from "../../elements/FlexboxColumn";

export const NewGameComponent = () => {
  const { dispatch } = useContext(AppContext);
  const translate = useTranslation();

  const handleNewGameButton = () => {
    fetchNewGame().then((value) => {
      if (value) {
        dispatch({ game: value, type: GameActionTypeEnum.SetGame });
      }
    });
  };

  return (
    <FlexboxColumn>
      <div>
        <Button onClick={handleNewGameButton}>
          {translate("startNewGameButton")}
        </Button>
      </div>
      <div>
        <p>{translate("noGameRunningText")}</p>
      </div>
    </FlexboxColumn>
  );
};
