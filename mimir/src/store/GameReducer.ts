import { GameStateEnum } from "../utils/GameStateEnum";
import { GameState } from "../models/GameState";
import { GameAction, GameActionTypeEnum } from "../models/GameAction";

export interface Answer {
  answer: string;
}

export function gameReducer(gameState: GameState, action: GameAction): GameState {
  switch (action.type) {
    case GameActionTypeEnum.SetGame:
      return { game: action.game, state: GameStateEnum.RUNNING };
    case GameActionTypeEnum.DeleteGame:
      return initialGame;
    case GameActionTypeEnum.UpdateGame:
      return { ...gameState, game: action.game };
    case GameActionTypeEnum.FinishGame:
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

