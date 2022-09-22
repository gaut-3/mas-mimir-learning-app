import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { GameStateEnum } from "../utils/GameStateEnum";
import { AppContext } from "../store/GameContext";
import { GameState } from "../models/GameState";
import { Link } from "react-router-dom";

interface Props {
  gameState: GameState;
}

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

  const [buttonTitle, setButtonTitle] = useState<String>("New Game");
  const { game, state, dispatch } = useContext(AppContext);

  const getGameStateTitle = () => {
    if (state == GameStateEnum.NO_GAME) {
      return "New Game";
    }
    if (state == GameStateEnum.RUNNING) {
      let count = game.solved.length;
      if (count === 0) {
        count = 1;
      }
      return "Solve #" + count;
    }
    if (state == GameStateEnum.FINISHED) {
      return "Finished";
    }
    return "New Game";
  };

  useEffect(() => {
    console.log("useeffect gameState ", state);
    setButtonTitle(getGameStateTitle());
  }, [state]);

  return (
    <Container>
      <Item alignment="left">
        <h1>Mimir</h1>
      </Item>
      <Item alignment="center">
        <Button>{buttonTitle}</Button>
      </Item>
      <Item alignment="right">
        <Link to="/cards">
          <Button>Manage Card</Button>
        </Link>
      </Item>
    </Container>
  );
};
