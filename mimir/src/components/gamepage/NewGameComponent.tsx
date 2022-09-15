import styled from "styled-components";

import { fetchNewGame } from "../../services/GameService";
import {GameState} from "../../models/GameState";
import {Game} from "../../models/Game";
import {AppContext} from "../../store/GameContext";
import {useContext} from "react";

interface Props {
  gameState: GameState;
  onGameChange: (game: Game) => void;
}

export const NewGameComponent = ({ gameState, onGameChange }: Props) => {
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

  const { game, state, dispatch } = useContext(AppContext)

  const handleNewGameButton = () => {
    fetchNewGame().then((value) => {
      if (value) {
        dispatch({game: value, type: 'set-new-game', })
      }
    });
  };

  return (
    <>
      <Container>
        <div>
          <Button onClick={handleNewGameButton}>Start New Game</Button>
        </div>
      </Container>
      <Container>
        <div>
          <p>No game running</p>
        </div>
      </Container>
    </>
  );
};
