import styled from "styled-components";

import { fetchNewGame } from "../../services/GameService";
import { AppContext } from "../../store/GameContext";
import { useContext } from "react";
import { GameActionTypeEnum } from "../../models/GameAction";
import useTranslation from "../../hooks/LanguageTranslation";
import { I18nContext } from "../../store/I18nContext";
import { Button } from "elements/Button";

interface Props {
  translate: (name: string, params?: any[] | undefined) => string;
}

export const NewGameComponent = ({ translate }: Props) => {
  const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
  `;

  const translatete = useTranslation();
  const { game, state, dispatch } = useContext(AppContext);

  const handleNewGameButton = () => {
    fetchNewGame().then((value) => {
      if (value) {
        dispatch({ game: value, type: GameActionTypeEnum.SetGame });
      }
    });
  };

  return (
    <>
      <Container>
        <div>
          <Button onClick={handleNewGameButton}>
            {translate("startNewGameButton")}
          </Button>
        </div>
      </Container>
      <Container>
        <div>
          <p>{translate("noGameRunningText")}</p>
        </div>
      </Container>
    </>
  );
};
