import styled from "styled-components";
import { useReducer } from "react";
import {
  fetchNewGame,
  gameReducer,
  initialState,
} from "../../reducers/gameReducer";
import {gameStateReducer, initialGameState} from "../../reducers/gameStateReducer";

export const NewGameComponent = () => {
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
  const [game, dispatchGame] = useReducer(gameReducer, initialState);
  const [gameState, dispatchGameState] = useReducer(gameStateReducer, initialGameState);

  const handleNewGameButton = () => {
    fetchNewGame().then((value) => {
      dispatchGame({ type: "START_NEW_GAME", payload: value });
      dispatchGameState({ type: "SET_GAME_STARTED" });
    });
  };


  console.log(game);
  console.log(gameState);

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
