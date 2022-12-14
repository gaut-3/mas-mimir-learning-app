import styled from "styled-components";
import { deleteGame, patchAnswerGame } from "../../services/GameService";
import { ChangeEvent, useContext, useState } from "react";
import { AppContext } from "../../store/GameContext";
import { GameActionTypeEnum } from "../../models/GameAction";
import { Answer } from "../../store/GameReducer";
import useTranslation from "../../hooks/LanguageTranslation";
import { Textfield } from "elements/Textfield";
import { FlexboxColumn } from "elements/FlexboxColumn";
import { Button, ButtonSize } from "../../elements/Button";

export const OngoingGameComponent = () => {
  const { game, dispatch } = useContext(AppContext);
  const translate = useTranslation();
  const [answerText, setAnswerText] = useState("");

  const getGameProgression = () => {
    const progessionNumber = (game.solved.length / game.cardCount) * 100;
    return Number(progessionNumber.toFixed(0));
  };

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
        if (value.solved.length === value.cardCount) {
          dispatch({ game: value, type: GameActionTypeEnum.FinishGame });
        } else {
          dispatch({ game: value, type: GameActionTypeEnum.UpdateGame });
        }
        setAnswerText("");
      }
    });
  };

  const handleAnswerTextfield = (e: ChangeEvent<HTMLInputElement>) => {
    setAnswerText(e.target.value);
  };

  const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 20px 20px;
  `;

  const Card = styled.div`
    display: flex;
    min-height: 400px;
    min-width: 400px;
    border: solid black 1px;
    justify-content: center;
    align-items: center;
  `;

  const FlexboxRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    column-gap: 20px;
    width: 100%;
  `;

  const Word = styled.div`
    font-weight: bold;
    font-size: 50px;
  `;

  return (
    <>
      <FlexboxRow>
        <div>
          <h2>
            {translate("progressTitle")} {getGameProgression()}%
          </h2>
        </div>
        <div>
          <Button onClick={handleDeleteGameButton}>
            {translate("deleteGameButton")}
          </Button>
        </div>
      </FlexboxRow>
      <CardContainer>
        <FlexboxColumn>
          <Card>
            <Word>{game.front}</Word>
          </Card>
          <FlexboxRow>
            <Textfield
              type="text"
              autoFocus={true}
              value={answerText}
              onChange={handleAnswerTextfield}
            />
            <Button size={ButtonSize.SMALL} onClick={handleAnwserButton}>
              {translate("submitButton")}
            </Button>
          </FlexboxRow>
        </FlexboxColumn>
      </CardContainer>
    </>
  );
};
