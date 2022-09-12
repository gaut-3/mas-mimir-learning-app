import styled from "styled-components";
import { Game, GameState } from "../../store/GameReducer";

import { fetchNewGame } from "../../services/GameService";

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

  const handleNewGameButton = () => {
    fetchNewGame().then((value) => {
      if (value) {
        onGameChange(value);
      }
    });
  };

  console.log("new game component gamestate: ", gameState);

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
