import styled from "styled-components";
import {useEffect, useReducer, useState} from "react";
import { GameStateEnum } from "../utils/GameStateEnum";
import {GameState} from "../store/GameReducer";

interface Props {
  gameState: GameState;
}

export const NavBarComponent = ({ gameState }: Props) => {
  const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: blue;
    padding: 0 5px;
  `;

  interface ItemProps {
    alignment: string;
  }

  const Item = styled.div<ItemProps>`
    margin: 10px;
    text-align: ${(p) => p.alignment};
    width: 100%;
    justify-content: right;
  `;

  const Button = styled.button`
    background: black;
    border-radius: 3px;
    color: white;
    margin: 0 1em;
    padding: 1.25em 3em;
  `;

  const [buttonTitle, setButtonTitle] = useState<String>("New Game");

  const getGameStateTitle = () => {
    if (gameState.state == GameStateEnum.NO_GAME) {
      return "New Game";
    }
    if (gameState.state == GameStateEnum.RUNNING) {
      return "Solve";
    }
    if (gameState.state == GameStateEnum.FINISHED) {
      return "Finished";
    }
    return "New Game";
  };

  useEffect(() => {
    console.log("useeffect gameState ", gameState);
    setButtonTitle(getGameStateTitle());
  }, [gameState]);

  return (
    <Container>
      <Item alignment="left">
        <h1>Mimir</h1>
      </Item>
      <Item alignment="center">
        <Button>{buttonTitle}</Button>
      </Item>
      <Item alignment="right">
        <Button>Manage Card</Button>
      </Item>
    </Container>
  );
};
