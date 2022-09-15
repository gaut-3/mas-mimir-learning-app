import {Game} from "./Game";

type SetNewGameAction = {
    type: 'set-new-game'
    game: Game
}

export type Action = SetNewGameAction