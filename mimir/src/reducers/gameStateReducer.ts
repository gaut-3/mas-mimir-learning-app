export interface GameState {
  state: GameStateEnum;
}

export enum GameStateEnum {
  NO_GAME,
  RUNNING,
  FINISHED,
}

export const initialGameState: GameState = {
  state: GameStateEnum.NO_GAME,
};

export const gameStateReducer = (
  state: any,
  action: { type: any; }
) => {
  switch (action.type) {
    case "SET_GAME_STARTED":
      return { state: GameStateEnum.RUNNING };
      break;
    case "SET_NO_GAME":
      return { state: GameStateEnum.NO_GAME };
      break;
    case "SET_GAME_FINISHED":
      return { state: GameStateEnum.FINISHED };
      break;
    default:
      return state;
  }
};
