import styled from "styled-components";
import { deleteGame, patchAnswerGame } from "../../services/GameService";
import { ChangeEvent, useContext, useState } from "react";
import { AppContext } from "../../store/GameContext";
import { GameActionTypeEnum } from "../../models/GameAction";
import { Answer } from "../../store/GameReducer";

export const OngoingGameComponent = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 20px 20px;
  `;
  const Button = styled.button`
    background: black;
    border-radius: 3px;
    color: white;
    margin: 0 1em;
    padding: 1.25em 3em;
  `;

  const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 20px 20px;
  `;

  const Card = styled.div`
    min-height: 400px;
    min-width: 400px;
    border: solid black 1px;
    vertical-align: middle;
  `;

  const Word = styled.div`
    padding-top: 50%;
    margin: 0;
  `;
  const [answerText, setAnswerText] = useState("");
  const { game, state, dispatch } = useContext(AppContext);

  const handleDeleteGameButton = () => {
    deleteGame().then((value) => {
      if (value) {
        dispatch({ type: GameActionTypeEnum.DeleteGame });
      }
    });
  };

  const handleAnwserButton = () => {
    const answer: Answer = {
      answer: answerText,
    };
    patchAnswerGame(answer).then((value) => {
      if (value) {
        console.log("ongoing finished awsdf ", game.solved.length, game.cardCount)
        if (value.solved.length === value.cardCount) {
          console.log("ongoing finished")
          dispatch({ game: value, type: GameActionTypeEnum.FinishGame });
        } else {
          dispatch({ game: value, type: GameActionTypeEnum.UpdateGame });
        }
      }
    });
  };

  console.log("game ", game);

  const getGameProgression = () => {
    return (game.solved.length / game.cardCount) * 100;
  };

  const handleAnswerTextfield = (e: ChangeEvent<HTMLInputElement>) => {
    setAnswerText(e.target.value);
  };

  return (
    <>
      <Container>
        <div>
          <h2>Progess {getGameProgression()}%</h2>
        </div>
        <div>
          <Button onClick={handleDeleteGameButton}>Delete Game</Button>
        </div>
      </Container>
      <Content>
        <Card>
          <Word>{game.front}</Word>
        </Card>
      </Content>
      <Content>
        <div>
          <input
            type="text"
            autoFocus={true}
            value={answerText}
            onChange={handleAnswerTextfield}
          />
          <Button onClick={handleAnwserButton}>Submit</Button>
        </div>
      </Content>
    </>
  );
};
