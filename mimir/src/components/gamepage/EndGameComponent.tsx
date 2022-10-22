import styled from "styled-components";
import { deleteGame, fetchNewGame } from "../../services/GameService";
import { GameActionTypeEnum } from "../../models/GameAction";
import { useContext } from "react";
import { AppContext } from "../../store/GameContext";
import useTranslation from "../../hooks/LanguageTranslation";
import { Button } from "elements/Button";

export const EndGameComponent = () => {
  const { game, state, dispatch } = useContext(AppContext);
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
    return (
      "Solved " + gameCards.length + " out of " + game.cardCount + " correctly"
    );
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

  const HeaderItems = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr 2fr 0.5fr;
    gap: 10px;
    font-weight: bold
  `;

  const SolvedContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    text-align: left;
  `;

  return (
    <>
      <Container>
        <div>
          <Button onClick={handleNewGameButton}>{translate("startNewGameButton")}</Button>
        </div>
      </Container>
      <Container>
        <div>
          <p>{getSolvedText()}</p>
        </div>
      </Container>
      <SolvedContainer>
        <HeaderItems>
          <div>{translate("solvedFrontHeaderText")}</div>
          <div>{translate("solvedBackHeaderText")}</div>
          <div>{translate("solvedYourAnswerHeaderText")}</div>
          <div>{translate("solvedAcceptedHeaderText")}</div>
        </HeaderItems>
        <AnwserItems>
          {game.solved.map((gameCard) => {
            return (
              <>
                <div>{gameCard.front}</div>
                <div>{gameCard.back}</div>
                <div>{gameCard.answer}</div>
                <div>{getAcceptedSymbol(gameCard.accepted)}</div>
              </>
            );
          })}
        </AnwserItems>
      </SolvedContainer>
    </>
  );
};
