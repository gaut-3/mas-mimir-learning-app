import { createContext, ReactNode, useReducer } from 'react'
import {gameReducer, initialGame} from "./GameReducer";
import {GameAction} from "../models/GameAction";
import {GameState} from "../models/GameState";

interface AppState extends GameState {
    dispatch: (action: GameAction) => void
}

const initialState: AppState = {
    ...initialGame,
    dispatch: (action: GameAction) => {}
}

interface Props {
    children: ReactNode
}

export const AppContext = createContext<AppState>(initialState)

export const AppProvider = ({ children }: Props) => {

    const [gameState, dispatch] = useReducer(gameReducer, initialState)

    const store = {
        ...gameState,
        dispatch
    }
    return <AppContext.Provider value={store}>{children}</AppContext.Provider>

}
