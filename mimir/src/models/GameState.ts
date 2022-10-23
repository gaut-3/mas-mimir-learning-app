import { GameStateEnum } from "../utils/GameStateEnum";
import { Game } from "./Game";

export interface GameState {
  game: Game;
  state: GameStateEnum;
}
