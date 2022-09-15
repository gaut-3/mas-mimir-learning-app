import {Game} from "./Game";

type SetNewGameAction = {
    type: ActionTypeEnum.SetGame
    game: Game
}

type DeleteGameAction = {
    type: ActionTypeEnum.DeleteGame
}

type UpdateGameAction = {
    type: ActionTypeEnum.UpdateGame
    game: Game
}

type FinishGameAction = {
    type: ActionTypeEnum.FinishGame
    game: Game
}

export enum ActionTypeEnum {
    SetGame="set-game",
    DeleteGame="delete-game",
    UpdateGame="update-game",
    FinishGame="finish-game",
}

export type Action = SetNewGameAction | DeleteGameAction | UpdateGameAction | FinishGameAction