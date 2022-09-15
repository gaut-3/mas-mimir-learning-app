import { createContext, ReactNode, useReducer } from 'react'
import {gameReducer, initialGame} from "./GameReducer";
import {Action} from "../models/Action";
import {GameState} from "../models/GameState";

interface AppState extends GameState {
    dispatch: (action: Action) => void
}

const initialState: AppState = {
    ...initialGame,
    dispatch: (action: Action) => {}
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
