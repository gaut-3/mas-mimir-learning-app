import styled from "styled-components";
import {useReducer, useState} from "react";
import {GameStateEnum, gameStateReducer, initialGameState} from "../reducers/gameStateReducer";

export const NavBarComponent = () => {
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

  const [buttonTitle, setButtonTitle] = useState(GameStateEnum.NO_GAME);
  const [gameState, dispatchGameState] = useReducer(
    gameStateReducer,
    initialGameState
  );

  const getGameStateTitle = () => {
      if(gameState == GameStateEnum.NO_GAME) {
          return "New Game"
      }
      if(gameState == GameStateEnum.RUNNING) {
          return "Solve"
      }
      if(gameState == GameStateEnum.FINISHED) {
          return "Finished"
      }
      return "New Game"
  }


  return (
    <Container>
      <Item alignment="left">
        <h1>Mimir</h1>
      </Item>
      <Item alignment="center">
        <Button>{getGameStateTitle()}</Button>
      </Item>
      <Item alignment="right">
        <Button>Manage Card</Button>
      </Item>
    </Container>
  );
};
