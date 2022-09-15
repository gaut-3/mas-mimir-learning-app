import { GameStateEnum } from "../utils/GameStateEnum";
import { GameState } from "../models/GameState";
import { Action, ActionTypeEnum } from "../models/Action";

export interface Card {
  id: string;
  front: string;
  back: string;
}

export interface Answer {
  answer: string;
}

export function gameReducer(gameState: GameState, action: Action): GameState {
  switch (action.type) {
    case ActionTypeEnum.SetGame:
      return { game: action.game, state: GameStateEnum.RUNNING };
    case ActionTypeEnum.DeleteGame:
      return initialGame;
    case ActionTypeEnum.UpdateGame:
      return { ...gameState, game: action.game };
    case ActionTypeEnum.FinishGame:
      return { game: action.game, state: GameStateEnum.FINISHED };
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

