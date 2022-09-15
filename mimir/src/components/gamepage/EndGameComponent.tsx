import styled from "styled-components";
import { deleteGame, fetchNewGame } from "../../services/GameService";
import { ActionTypeEnum } from "../../models/Action";
import { useContext } from "react";
import { AppContext } from "../../store/GameContext";

export const EndGameComponent = () => {
  const { game, state, dispatch } = useContext(AppContext);

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

  const handleNewGameButton = () => {
    deleteGame().then((value) => {
      if (value) {
        dispatch({ type: ActionTypeEnum.DeleteGame });
      }
    });
    fetchNewGame().then((value) => {
      if (value) {
        dispatch({ game: value, type: ActionTypeEnum.SetGame });
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
    if(accepted) {
      return  String.fromCharCode( 0x2713)
    } else {
      return String.fromCharCode(0xD83D,0xDFA9)
    }
  }

  return (
    <>
      <Container>
        <div>
          <Button onClick={handleNewGameButton}>Start New Game</Button>
        </div>
      </Container>
      <Container>
        <div>
          <p>{getSolvedText()}</p>
        </div>
      </Container>
      <Container>
        <>
          <div>Front</div>
          <div>Back</div>
          <div>Your Answer</div>
          <div>Accepted</div>
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
        </>
      </Container>
    </>
  );
};
