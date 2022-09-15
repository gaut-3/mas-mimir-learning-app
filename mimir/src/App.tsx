import React, { useReducer } from "react";
import "./App.css";
import { NavBarComponent } from "./components/NavBarComponent";
import { GamePageComponent } from "./components/gamepage/GamePageComponent";
import {gameReducer, initialGame} from "./store/GameReducer";

function App() {

  return (
    <div className="App">
      <NavBarComponent ></NavBarComponent>
      <GamePageComponent />
    </div>
  );
}

export default App;
