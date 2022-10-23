import styled from "styled-components";
import { deleteGame, fetchNewGame } from "../../services/GameService";
import { GameActionTypeEnum } from "../../models/GameAction";
import { useContext } from "react";
import { AppContext } from "../../store/GameContext";
import useTranslation from "../../hooks/LanguageTranslation";
import { Button } from "elements/Button";
import { Separator } from "elements/Separator";
import {FlexboxColumn} from "../../elements/FlexboxColumn";

export const EndGameComponent = () => {
  const { game, dispatch } = useContext(AppContext);
  const translate = useTranslation();

  const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
  `;

  const handleNewGameButton = () => {
    deleteGame().then((value) => {
      if (value) {
        dispatch({ type: GameActionTypeEnum.DeleteGame });
      }
    });
    fetchNewGame().then((value) => {
      if (value) {
        dispatch({ game: value, type: GameActionTypeEnum.SetGame });
      }
    });
  };

  const getSolvedText = () => {
    const gameCards = game.solved.filter((value) => value.accepted);
    return translate("solvedTotalText", [gameCards.length, game.cardCount]);
  };

  const getAcceptedSymbol = (accepted: boolean) => {
    if (accepted) {
      return String.fromCharCode(0x2713);
    } else {
      return String.fromCharCode(0xd83d, 0xdfa9);
    }
  };

  const AnwserItems = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr 2fr 0.5fr;
    gap: 10px;
    margin: 15px 0;
    padding: 15px 0;
    border-bottom: 1px black solid;
    border-top: 1px black solid;
  `;

  const HeaderItem = styled.div`
    font-weight: bold;
  `;

  const SolvedContainer = styled.div`
    text-align: left;
    display: grid;
    grid-template-columns: 2fr 2fr 2fr 0.5fr;
    gap: 10px;
    margin: 15px 0;
    padding: 15px 0;
  `;

  return (
    <>
      <FlexboxColumn>
        <div>
          <Button onClick={handleNewGameButton}>
            {translate("startNewGameButton")}
          </Button>
        </div>
        <div>
          <p>{getSolvedText()}</p>
        </div>
      </FlexboxColumn>
      <SolvedContainer>
        <HeaderItem>{translate("frontHeaderText")}</HeaderItem>
        <HeaderItem>{translate("backHeaderText")}</HeaderItem>
        <HeaderItem>{translate("solvedYourAnswerHeaderText")}</HeaderItem>
        <HeaderItem>{translate("solvedAcceptedHeaderText")}</HeaderItem>
        <Separator />
        {game.solved.map((gameCard) => {
          return (
            <>
              <div>{gameCard.front}</div>
              <div>{gameCard.back}</div>
              <div>{gameCard.answer}</div>
              <div>{getAcceptedSymbol(gameCard.accepted)}</div>
              <Separator />
            </>
          );
        })}
      </SolvedContainer>
    </>
  );
};
