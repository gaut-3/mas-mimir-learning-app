import React, { useReducer } from "react";
import "./App.css";
import { NavBarComponent } from "./components/NavBarComponent";
import { GamePageComponent } from "./components/gamepage/GamePageComponent";
import {GameReducer, initialGame} from "./store/GameReducer";

function App() {
  const [gameState, gameStateDispatch] = useReducer(
    GameReducer,
      initialGame
  );

  return (
    <div className="App">
      <NavBarComponent gameState={gameState}></NavBarComponent>
      <GamePageComponent gameState={gameState} onGameChange={game => gameStateDispatch({type: "set-new-game", game})}></GamePageComponent>
    </div>
  );
}

export default App;
