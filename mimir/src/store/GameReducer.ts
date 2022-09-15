import { GameStateEnum } from "../utils/GameStateEnum";
import { GameState } from "../models/GameState";
import { Action } from "../models/Action";

export interface GameCard {
  id: string;
  front: string;
  back: string;
  answer: string;
  accepted: string;
}

export interface Card {
  id: string;
  front: string;
  back: string;
}

export interface Anwser {
  answer: string;
}

export function gameReducer(gameState: GameState, action: Action): GameState {
  switch (action.type) {
    case "set-new-game":
      return { game: action.game, state: GameStateEnum.RUNNING };
      break;
  }
}

export const initialGame: GameState = {
  game: {
    front: "",
    cardCount: 0,
    solved: [],
  },
  state: GameStateEnum.NO_GAME,
};

