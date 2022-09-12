import { GameStateEnum } from "../utils/GameStateEnum";

export interface GameCard {
  id: string;
  front: string;
  back: string;
  answer: string;
  accepted: string;
}

export interface Game {
  front: string;
  cardCount: number;
  solved: [];
}

export interface GameState {
  game: Game
  state: GameStateEnum
}

export interface Card {
  id: string;
  front: string;
  back: string;
}

export interface Anwser {
  answer: string;
}

export const initialGame: GameState = {
  game: {
    front: "",
    cardCount: 0,
    solved: []
  },
  state: GameStateEnum.NO_GAME
}

type SetNewGameAction = {
  type: 'set-new-game'
  game: Game
}

type Action = SetNewGameAction

export const GameReducer = (
  gameState: GameState,
  action: Action
) => {
  switch (action.type) {
    case "set-new-game":
      return { game: action.game, state: GameStateEnum.RUNNING };
      break;
  }
};
