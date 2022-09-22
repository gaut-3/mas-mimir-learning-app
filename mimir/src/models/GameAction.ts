import { Game } from "./Game";

type SetNewGameAction = {
  type: GameActionTypeEnum.SetGame;
  game: Game;
};

type DeleteGameAction = {
  type: GameActionTypeEnum.DeleteGame;
};

type UpdateGameAction = {
  type: GameActionTypeEnum.UpdateGame;
  game: Game;
};

type FinishGameAction = {
  type: GameActionTypeEnum.FinishGame;
  game: Game;
};

export enum GameActionTypeEnum {
  SetGame = "set-game",
  DeleteGame = "delete-game",
  UpdateGame = "update-game",
  FinishGame = "finish-game",
}

export type GameAction =
  | SetNewGameAction
  | DeleteGameAction
  | UpdateGameAction
  | FinishGameAction;
