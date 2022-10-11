import styled from "styled-components";

import { fetchNewGame } from "../../services/GameService";
import { AppContext } from "../../store/GameContext";
import {useContext, useEffect} from "react";
import { GameActionTypeEnum } from "../../models/GameAction";
import useTranslation from "../../utils/LanguageTranslation";
import {I18nContext} from "../../store/I18nContext";


interface Props {
  translate: (name: string, params?: any[] | undefined) => string;
}

export const NewGameComponent = ({translate}: Props) => {
  const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
  `;
  const Button = styled.button`
    background: black;
    border-radius: 3px;
    color: white;
    margin: 0 1em;
    padding: 1.25em 3em;
  `;

  const translatete = useTranslation();
  const { game, state, dispatch } = useContext(AppContext);
  const { lang, translations } = useContext(I18nContext);


  const handleNewGameButton = () => {
    fetchNewGame().then((value) => {
      if (value) {
        dispatch({ game: value, type: GameActionTypeEnum.SetGame });
      }
    });
  };

  console.log("test", translate("solvedTotalText", [1, 2]))
  return (
    <>
      {translations && (
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
        )}
    </>
  );
};
