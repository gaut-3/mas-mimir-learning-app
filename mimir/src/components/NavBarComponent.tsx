import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { GameStateEnum } from "../utils/GameStateEnum";
import { AppContext } from "../store/GameContext";
import { GameState } from "../models/GameState";
import { Link } from "react-router-dom";
import useTranslation from "../hooks/LanguageTranslation";
import { LanguageComponent } from "./LanguageComponent";
import { Button } from "elements/Button";

interface Props {
  gameState: GameState;
}

export const NavBarComponent = () => {
  interface ContainerProps {
    justifyContent: string;
  }

  interface ItemProps {
    alignment: string;
  }

  const translate = useTranslation();

  const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${(p) => p.justifyContent};
    background-color: blue;
    padding: 0 5px;
    margin-bottom:25px;
  `;

  const Item = styled.div<ItemProps>`
    margin: 10px;
    text-align: ${(p) => p.alignment};
    width: 100%;
    justify-content: right;
  `;


  const [buttonTitle, setButtonTitle] = useState<string>("newGameButton");
  const { game, state } = useContext(AppContext);

  const getGameStateTitle = () => {
    if (state == GameStateEnum.RUNNING) {
      return "runningGameButton";
    }
    if (state == GameStateEnum.FINISHED) {
      return "finishedGameButton";
    }
    return "newGameButton";
  };

  const getCountNumberGameRunning = (): string => {
    if (state == GameStateEnum.RUNNING) {
      let count = game.solved.length;
      if (count === 0) {
        count = 1;
      }
      return count.toString();
    }
    return "";
  };

  useEffect(() => {
    setButtonTitle(getGameStateTitle());
  }, [state]);

  return (
    <Container justifyContent="space-between">
      <Item alignment="left">
        <Container justifyContent="left">
          <h1>Mimir</h1>
          <LanguageComponent />
        </Container>
      </Item>
      <Item alignment="center">
        <Link to="/">
          <Button>
            {translate(buttonTitle, [getCountNumberGameRunning()]) }
          </Button>
        </Link>
      </Item>
      <Item alignment="right">
        <Link to="/cards">
          <Button>{translate("manageCardButton")}</Button>
        </Link>
      </Item>
    </Container>
  );
};
